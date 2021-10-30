import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/all.css';
import '../assets/styles/empty.css';

const Empty = () => {
    return(
        <div className="emptyAll">
                <div className="empty_title">
                    <h4>잘못된 접근입니다.</h4>
                    <Link to={`/guestbook`}><button className="empty_button" style={{marginRight:10}}>돌아가기</button></Link>
                </div>
        </div>
    )
}

export default Empty;