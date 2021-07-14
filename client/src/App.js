import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm'
import SignUp from './components/user/SignUp.js'
import BbsInsert from './components/BbsInsert.js'

const domainUrl = document.location;
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
    const response = await fetch('/api/bbsInfo');   // 서버단 호출
    // console.log(response);
    // console.log(response.text);
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
                title={item.TITLE}
                content={item.CONTENT}
                seq={item.SEQ}
                likeCnt={item.LIKE_CNT}
                nSrc={item.FILE_PATH}
              ></MainForm>
            }) : ''}
        </div>
        {/* content Div END */}
        
        <hr/>

        {/* 회원가입 폼 */}
        <div>
            <SignUp/>
        </div>
        <hr/>
        {/* 회원가입 폼 */}
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
