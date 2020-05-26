import React, { Component } from 'react';
import './App.css';
import Forms from './components/Forms'

class App extends Component {

  state = {
    imgArr: [
      {
        id:0,
        name: 'arin1',
        src: '../img/arin/Kakaoimg.jpg'
      }
    ]
  }

  render() {
    const { imgArr } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Arin Gallery</h1>
        </header>

        {/* content 내부 */}
        <Forms />
      </div>
    );
  } 
}

export default App;
