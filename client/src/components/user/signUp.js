import React from 'react'

import { post } from 'axios';

class SignUp extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            userId: '',

            userName: '',

            password: '',

            email: ''

        }

        // 저장 행위
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        // 값 변경 시 이벤트
        this.handleValueChange = this.handleValueChange.bind(this)
        // 실제 저장
        this.doSignUp = this.doSignUp.bind(this)

    }

    handleFormSubmit(e) {       // submit

        e.preventDefault()

        this.doSignUp()

        .then((response) => {

        console.log(response.data);

        })

    }



    handleFileChange(e) {       // file

        this.setState({

        file: e.target.files[0],

        fileName: e.target.value

        });

    }


    handleValueChange(e) {      // valueChange Event
        const rName = e.target.name;

        const passStyle = rName === "password"
                            ? e.target.value < 4 ? "red" : "green"
                            : "" ;
        // password Check
        const passStyle2 = rName === "password2"
                            ? e.target.value != this.state.password ? "red" : "green"
                            : "" ;
console.log('passStyle2 : ' + passStyle2); 
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    doSignUp(){
        const url = '/api/userInfo';
        const formData = new FormData();

        formData.append('userId',  this.state.userId)
        formData.append('userName',this.state.userName)
        formData.append('email',   this.state.email)
        formData.append('password',   this.state.password)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return post(url, formData, config)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>Sign Up</h1>
                <input type="text" name="userId" placeholder="User ID" value={this.state.userId} onChange={this.handleValueChange} /><br/>
                <input type="password" name="password" placeholder="Password(4~12)" value={this.state.password} onChange={this.handleValueChange} /><br/>
                <input type="password" name="password2" placeholder="Confirm Password" onChange={this.handleValueChange} /><br/>
                <input type="text" name="userName" placeholder="User Name" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.handleValueChange} /><br/>
                <button type="submit">signUp</button>
            </form>
        )
    }
}

export default SignUp