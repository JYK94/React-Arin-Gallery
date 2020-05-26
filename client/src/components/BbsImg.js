import React, { Component } from 'react'
import '../App.css';

class BbsImg extends Component {
    render () {
        return (
            <div>
                <img src={this.props.nSrc} alt="profile" />
            </div>
        )
    }
}

export default BbsImg;