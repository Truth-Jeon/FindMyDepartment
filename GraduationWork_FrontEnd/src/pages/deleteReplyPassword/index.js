import React, {useState} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import '../assets/styles/all.css';
import '../assets/styles/updatePasswordCheck.css';

const DeleteReplyPassword = (props) => {
    const [replyPassword, setReplyPassword] = useState("");

    const [replyPWStatus,setReplyPwStatus] = useState("");

    const idx = useParams().id;
    const replyid = useParams().replyid;

    const checkReplyPassword = () => {
        axios.post(`http://localhost:3001/replypasswordcheck/${idx}/${replyid}`, {
            id:idx,
            replyid:replyid,
            pw:replyPassword,
        }).then((response) => {
            console.log(response.data.message);
            if(response.data.message) {
                setReplyPwStatus(response.data.message);
                alert("비밀번호가 틀렸습니다. 다시 입력해주세요.");
            } else {
                props.history.push(`/deletereply/${idx}/${replyid}`);
            }
        });
    };

    return(
        <>
            <div className="checkAll">
                <div className="check_password">
                    <h4>비밀번호 입력 :</h4>
                    <input type="password" onChange={(e)=> {setReplyPassword(e.target.value)}}></input>
                    <button onClick={checkReplyPassword}>입력</button>
                    <p>{replyPWStatus}</p>
                </div>
            </div>
        </>
    )
}

export default DeleteReplyPassword;