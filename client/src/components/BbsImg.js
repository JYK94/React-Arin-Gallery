import React, { Component } from 'react'
import '../App.css';

class BbsImg extends Component {
    render () {
        return (
            <div className="bbsImgDiv">
                <img className="bbsImage" src={this.props.nSrc} alt="profile" />
            </div>
        )
    }
}

export default BbsImg;