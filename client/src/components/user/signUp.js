import React from 'react'

import { post } from 'axios';

class signUp extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            userId: null,

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

    handleFormSubmit(e) {

        e.preventDefault()

        this.doSignUp()

        .then((response) => {

        console.log(response.data);

        })

    }



    handleFileChange(e) {

        this.setState({

        file: e.target.files[0],

        fileName: e.target.value

        });

    }


    handleValueChange(e) {

        let nextState = {};

        nextState[e.target.name] = e.target.value;

        this.setState(nextState);

    }

    doSignUp(){

        const url = '/api/bbsInfo';

        const formData = new FormData();

        formData.append('userId',  this.state.userId)

        formData.append('userName',this.state.userName)

        formData.append('email',   this.state.email)

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

<h1>고객 추가</h1>

프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>

이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>

생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>

성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>

직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>

<button type="submit">추가하기</button>

</form>

)

}

}



export default signUp