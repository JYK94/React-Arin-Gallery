import React, { Component } from 'react';
import './App.css';
import ImageList from './components/ImageList'; // Import ImageList

class App extends Component {
  state = {
    // images: [], // Removed
    // page: 1, // Removed
    // loading: false, // Removed
    // hasMore: true, // Removed
  };

  componentDidMount() {
    // this.loadMoreImages(); // Removed
    // window.addEventListener('scroll', this.handleScroll); // Removed
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll); // Removed
  }

  // handleScroll removed

  // callApi removed

  // loadMoreImages removed

  render() {
    // const { images } = this.state; // Removed
    return (
      <div className="App">
        <header className="App-header">
          <h1>Arin Gallery</h1>
        </header>

        <div className="content">
          <ImageList /> {/* Use ImageList component without props */}
          {/* {loading && <p>Loading more images...</p>} // Removed */ }
          {/* {!hasMore && <p>No more images to load.</p>} // Removed */ }
        </div>
        {/* content Div END */}
        
        {/* 회원가입 폼 (SignUp component usage removed) */}
        {/* <hr/> // Also removing the hr for cleaner output
        <div>
            <SignUp/>
        </div> */}
        {/* 게시글 INSERT 폼 (BbsInsert component usage removed) */}
        {/* <hr/> // Also removing the hr
        <div>
            <BbsInsert/>
        </div> */}

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
