import React, { Component } from 'react'
import '../App.css';



class BbsInfo extends Component {
    render () {
        return (
            <div>
                <p>name : {this.props.name}</p>
                <p>likeCnt ♥ {this.props.likeCnt}</p>
            </div>
        )
   }
}

export default BbsInfo;