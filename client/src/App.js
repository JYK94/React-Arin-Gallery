import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm'

const bbsInfo = [
  {
    name : '아린',
    bbsNo : 'ARIN-0001',
    content : 'like arin',
    seq : 1,
    likeCnt : 3,
    nSrc : '/images/5.jpg'
  },
  {
    name : '아린2',
    bbsNo : 'ARIN-0002',
    content : 'like arin3',
    seq : 2,
    likeCnt : 2,
    nSrc : '/images/2.jpg'
  },
  {
    name : '아린3',
    bbsNo : 'ARIN-0003',
    content : 'like arin3',
    seq : 3,
    likeCnt : 5,
    nSrc : '/images/3.jpg'
  }
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Arin Gallery</h1>
        </header>

        <div className="content">
          {/* content 내부 */}
          {bbsInfo.map(item => {
              return <MainForm
                name={item.name}
                bbsNo={item.bbsNo}
                content={item.content}
                seq={item.seq}
                goodCnt={item.goodCnt}
                likeCnt={item.likeCnt}
                nSrc={item.nSrc}
              ></MainForm>
            })}
          </div>
       </div>
    );
  } 
}

export default App;
