import React, { Component } from 'react';
import './App.css';
// import MainForm from './components/MainForm' // Will be replaced by ImageList
import SignUp from './components/user/SignUp.js';
import BbsInsert from './components/BbsInsert.js';
import ImageList from './components/ImageList'; // Import ImageList

class App extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    hasMore: true,
    // bbsInfo: '' // Remove this
  };

  componentDidMount() {
    this.loadMoreImages();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // Check if scrolled to bottom
    if (
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && // Add a small threshold
      !this.state.loading &&
      this.state.hasMore
    ) {
      this.loadMoreImages();
    }
  };

  // node.js 비동기식 호출
  callApi = async (page, limit = 10) => { // Added limit, default to 10
    const response = await fetch(`/api/bbsInfo?page=${page}&limit=${limit}`);
    const body = await response.json();
    return body;
  };

  loadMoreImages = async () => {
    if (this.state.loading || !this.state.hasMore) return;

    this.setState({ loading: true });
    try {
      const newImages = await this.callApi(this.state.page);
      if (newImages.length === 0) {
        this.setState({ hasMore: false });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          page: prevState.page + 1,
        }));
      }
    } catch (err) {
      console.error("Failed to load images", err);
      // Optionally, handle the error in the UI
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { images, loading, hasMore } = this.state; // Ensure hasMore is destructured if used for messages
    return (
      <div className="App">
        <header className="App-header">
          <h1>Arin Gallery</h1>
        </header>

        <div className="content">
          <ImageList images={images} /> {/* Use ImageList component */}
          {loading && <p>Loading more images...</p>}
          {!hasMore && <p>No more images to load.</p>}
        </div>
        {/* content Div END */}
        
        <hr/>

        {/* 회원가입 폼 */}
        <div>
            <SignUp/>
        </div>
        <hr/>
        {/* 게시글 INSERT 폼 */}
        <div>
            <BbsInsert/>
        </div>

        <hr/>

        <footer className="App-footer">
            <p>Copyright JYK94 2021.</p>
        </footer>
      </div>
      // App Div END
    );
  } 
}

export default App;
