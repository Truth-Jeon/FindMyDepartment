import React, {useState} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import '../assets/styles/all.css';
import '../assets/styles/delete.css';

const DeleteReply = () => {
    const idx = useParams().id;
    const replyid = useParams().replyid;
    
    const deleteReply = (idx, replyid) => {
        axios.delete(`http://localhost:3001/deletereply/${idx}/${replyid}`); 
    };

    return (
        <>
            <div className="deleteAll">
                <div className="delete_title">
                    <h4>댓글을 삭제하시겠습니까?</h4>
                    <div className="delete_btn">
                        <Link to={`/read/${idx}`}><button className="delete_button" style={{marginRight:20}}onClick={() => {deleteReply(idx, replyid)}}>예</button></Link>
                        <Link to={`/read/${idx}`}><button className="delete_button">아니오</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteReply;