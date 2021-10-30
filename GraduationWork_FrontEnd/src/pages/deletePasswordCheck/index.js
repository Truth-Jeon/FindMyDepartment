import React, {useState} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import '../assets/styles/all.css';
import '../assets/styles/updatePasswordCheck.css';

const DeletePasswordCheck = (props) => {
    const [password, setPassword] = useState("");

    const [pwStatus,setPwStatus] = useState("");

    const idx = useParams().id;

    const checkPassword = () => {
        axios.post(`http://localhost:3001/passwordcheck/${idx}`, {
            id:idx,
            pw:password
        }).then((response) => {
            console.log(response.data.message);
            if(response.data.message) {
                setPwStatus(response.data.message);
                alert("비밀번호가 틀렸습니다. 다시 입력해주세요.");
            } else {
                props.history.push(`/delete/${idx}`);
            }
        });
    };

    return(
        <>
            <div className="checkAll">
                <div className="check_password">
                    <h4>비밀번호 입력 :</h4>
                    <input type="password" onChange={(e)=> {setPassword(e.target.value)}}></input>
                    <button onClick={checkPassword}>입력</button>
                    <p>{pwStatus}</p>
                </div>
            </div>
        </>
    )
}

export default DeletePasswordCheck;