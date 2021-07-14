import axios from 'axios';
import React, { Component } from 'react'
import '../App.css';

class BbsInsert extends Component {
    
    constructor(props) {        // constructor 추가
        super(props);
        this.state = {          // 파일 객체를 담을 state
            selectedFile: null,
        }
    }

    handleFileInput(e) {        // 파일 input 클릭 시 이벤트
        this.setState({
            selectedFile : e.target.files[0],
        })
    }

    handlePost() {
        // file FormData 생성하여 API서버로 POST 방식으로 요청
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);

        return axios.post("/api/upload", formData).then(res => {
            alert('업로드 성공');
        }).catch(err => {
            alert('업로드 실패');
            console.log(err);
        })
    }

    render () {
        return (
            <div className="bbsInfoDiv">

                <h2>BBS Insert</h2>
                <form>
                    <input type="hidden" name="BBS_NO" />
                    <input type="hidden" name="SEQ" />
                    <input type="hidden" name="WRT_USER_ID" />
                TITLE : <input type="text" name="TITLE" /> <br/>
                CONTENT : <input type="text" name="CONTENT" /> <br/>
                {/* 첨부파일 입력 */}
                <input type="file" name="file" onChange={null}/>
                <br/>
                <button type="button" accept="image/gif, image/jpeg, image/png" onClick={null}>저장</button>
                <button type="button" onClick={null}>취소</button>
                </form>
            </div>
        )
   }
}

export default BbsInsert;