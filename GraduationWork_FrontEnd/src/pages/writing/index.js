import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../assets/styles/all.css';
import '../assets/styles/writing.css';

const Writing = () => {
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [writing, setWriting] = useState([]);

    const submitBoard = () => {
        axios.post('http://localhost:3001/writing', {
            name:name, pw:pw, title:title, content:content
        });
        setWriting([...writing, {name:name, pw:pw, title:title, content:content}]);
    };

    return(
        <>
            <form className="writing">
                <article className="writing_start">
                    <div className="title">
                        <h1>방명록 등록하기</h1>
                    </div>
                    <div className="writing_nickname">
                        <h5>닉네임 :</h5>
                        <input type="text" name="name" onChange={(e) => {setName(e.target.value)}}></input>
                    </div>
                    <div className="writing_password">
                        <h5>비밀번호 :</h5>
                        <input type="text" name="pw" onChange={(e) => {setPw(e.target.value)}}></input>
                    </div>
                    <div className="writing_title">
                        <h5>제목 :</h5>
                        <input type="text" name="title" onChange={(e) => {setTitle(e.target.value)}}></input>
                    </div>
                    <div className="writing_content">
                        <textarea name="content" onChange={(e) => {setContent(e.target.value)}}></textarea>
                        <Link to={"/guestbook"} style={{textDecoration:'none'}}><button type="input" className="registration_btn" onClick={submitBoard}>등록하기</button></Link>
                    </div>
                </article>
                
            </form>
        </>
    )
}

export default Writing;