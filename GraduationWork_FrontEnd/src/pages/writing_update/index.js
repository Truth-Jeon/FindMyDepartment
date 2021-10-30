import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../assets/styles/all.css';
import '../assets/styles/writing.css';

const WritingUpdate = (props) => {
    const [newName, setNewName] = useState('');
    const [newPw, setNewPw] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newBoardList, setNewBoardList] = useState([]);

    const idx = useParams().id;

    useEffect(() => {
        axios.get(`http://localhost:3001/update/${idx}`).then((response) => {
            setNewBoardList(response.data);
        })
    }, []);

    const updateBoard = (idx) => {
        axios.put(`http://localhost:3001/update/${idx}`, {
            id:idx,
            name:newName,
            pw:newPw,
            title:newTitle,
            content:newContent
        });
        setNewName("");
        setNewPw("");
        setNewTitle("");
        setNewContent("");
    }

    return(
        <>
            {newBoardList.map((value, key) => {
                return(
                    <form className="writing" key={key}>
                        <article className="writing_start">
                            <div className="title">
                                <h1>방명록 수정하기</h1>
                            </div>
                            <div className="writing_nickname">
                                <h5>닉네임 :</h5>
                                <input type="text" name="name" placeholder={value.name} onChange={(e) => {setNewName(e.target.value)}}></input>
                            </div>
                            <div className="writing_password">
                                <h5>비밀번호 :</h5>
                                <input type="text" name="pw" placeholder={value.pw} onChange={(e) => {setNewPw(e.target.value)}}></input>
                            </div>
                            <div className="writing_title">
                                <h5>제목 :</h5>
                                <input type="text" name="title" placeholder={value.title} onChange={(e) => {setNewTitle(e.target.value)}}></input>
                            </div>
                            <div className="writing_content">
                                <textarea name="content" placeholder={value.content} onChange={(e) => {setNewContent(e.target.value)}}></textarea>
                                <Link to={"/guestbook"} style={{textDecoration:'none'}}><button type="input" className="registration_btn" onClick={() => {updateBoard(value.id)}}>등록하기</button></Link>
                            </div>
                        </article>
                    </form>
                )
            })
            }
        </>
    )
}

export default WritingUpdate;