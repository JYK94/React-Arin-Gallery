import React, { Component } from 'react'
import '../App.css';



class BbsInfo extends Component {
    render () {
        return (
            <div className="bbsInfoDiv">
                <p>WRITER : {this.props.name}</p>
                <p>BbsNo. : {this.props.bbsNo}-{this.props.seq}</p>
                <p>TITLE  : {this.props.title}</p>
                <p>CONTENT: {this.props.content}</p>
                <p>
                    <img src="https://pic.sopili.net/pub/emoji/twitter/2/72x72/2764.png" width='12' height='12' alt="heart" /> 
                    &nbsp;{this.props.likeCnt}
                </p>
            </div>
        )
   }
} 

export default BbsInfo;