import React , {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/all.css';
import '../assets/styles/guestbook.css';
import { Table, CardHeader } from "reactstrap";
import { Row, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

const GuestBook = () => {
    const [boardList, setBoardList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    useEffect(() => {
        axios.post('http://localhost:3001/guestbook').then((response) => {
            setBoardList(response.data);
        })
    }, []);

    const readBoard = (idx) => {
        axios.get(`http://localhost:3001/read/${idx}`);
    }

    const handleChange=(event, value) => {
        setCurrentPage(value);
    }

    const indexOfLastPost = currentPage * postsPerPage; // 마지막 guestbook의 index 번호
    const indexOfFirstPost = indexOfLastPost - postsPerPage; // 첫번째 guestbook의 index 번호
    const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost); //각 페이지에서 보여질 포스트 배열
    const pageNumber = Math.ceil(boardList.length/postsPerPage);
    
    return(
        <>
            <Container className="guestbook mt-5 mb-5">
                <CardHeader className="guestbook_card">
                    <Row>
                        <h1>방명록</h1>
                        <Table className="guestbook_table mt-5">
                            <thead>
                                <tr>
                                    <th className="table_head_name">닉네임</th>
                                    <th className="table_head_title">제목</th>
                                    <th className="table_head_date">작성일</th>
                                    <th className="table_head_hit">조회수</th>
                                    <th className="table_head_modify">수정</th>
                                    <th className="table_head_delete">삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {currentPosts.map((value, key) => {
                                        return(
                                            <tr key={key}>
                                                <th className="table_body_name">{value.name}</th>
                                                <Link to={{ pathname: `/read/${value.id}`}} style={{textDecoration:'none'}}><td className="table_body_title" onClick={()=> {readBoard(value.id)}}>{value.title}</td></Link>
                                                <td className="table_body_date">{value.date}</td>
                                                <td className="table_body_hit">{value.hit}</td>
                                                <td>
                                                    <Link to={`/updatepasswordcheck/${value.id}`}><button className="table_button_modify">수정</button></Link>
                                                </td>
                                                <td>
                                                    <Link to={`/deletepasswordcheck/${value.id}`}><button className="table_button_delete">삭제</button></Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    }
                                <tr className="table_bottom">
                                    <th className="table_body"></th>
                                    <td className="table_body"></td>
                                    <td className="table_body"></td>
                                    <td className="table_body"></td>
                                    <td className="table_body"></td>
                                    <td><Link to={"/writing"} style={{textDecoration:'none'}}><button className="write_button">글쓰기</button></Link></td>
                                </tr>
                            </tbody>
                        </Table>
                        <Pagination className="pagination" count={pageNumber} defaultpage={indexOfFirstPost} page={currentPage} onChange={handleChange} color="primary" />
                    </Row> 
                </CardHeader>
            </Container>
        </>
    )
}

export default GuestBook;