import React, { Component } from 'react'
import '../App.css';

class Forms extends Component {
    state = {
        name: '',
        id: '',
        src: ''
    }

    // 
    render () {
        
        return (
            <div className='content'>
                <p>name : {this.state.name}</p>
                <p>id : {this.state.id}</p>
                <p>src : {this.state.src}</p>
            </div>
        )
    }
}

export default Forms;