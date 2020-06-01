import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm'

class App extends Component {
  state = {
    bbsInfo: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({bbsInfo: res}))
      .catch(err => console.log(err));
  }

  // node.js 비동기식 호출
  callApi = async() => {
    const response = await fetch('/api/bbsInfo');
    const body = await response.json();   // json형식으로 데이터 get
    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Arin Gallery</h1>
        </header>

        <div className="content">
          {/* content 내부 */}
          {this.state.bbsInfo ? this.state.bbsInfo.map(item => {
              return <MainForm
                key={item.BBS_NO}
                name={item.USER_NM}
                bbsNo={item.BBS_NO}
                content={item.CONTENT}
                seq={item.SEQ}
                likeCnt={item.likeCnt}
                nSrc={item.FILE_PATH}
              ></MainForm>
            }) : ''}
          </div>
       </div>
    );
  } 
}

export default App;
