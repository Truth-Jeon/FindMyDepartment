import React, {useState} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import '../assets/styles/all.css';
import '../assets/styles/delete.css';

const Delete = () => {
    const idx = useParams().id;

    const deleteBoard = (idx) => {
        axios.delete(`http://localhost:3001/delete/${idx}`); 
    };

    return (
        <>
            <div className="deleteAll">
                <div className="delete_title">
                    <h4>방명록을 삭제하시겠습니까?</h4>
                    <div className="delete_btn">
                        <Link to={`/guestbook`}><button className="delete_button" style={{marginRight:10}}onClick={() => {deleteBoard(idx)}}>예</button></Link>
                        <Link to={`/guestbook`}><button className="delete_button">아니오</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delete;