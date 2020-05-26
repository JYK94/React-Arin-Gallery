import React, { Component } from 'react'
import '../App.css';
import BbsInfo from './BbsInfo';
import BbsImg from './BbsImg';

class MainForm extends Component {
    render () {
        return (
            <div className='imgItem'>
                <BbsImg nSrc={this.props.nSrc} />
                <BbsInfo 
                    name={this.props.name}
                    bbsNo={this.props.bbsNo}
                    content={this.props.content}
                    seq={this.props.seq}
                    likeCnt={this.props.likeCnt}
                />
            </div>
        )
    }
}

export default MainForm;