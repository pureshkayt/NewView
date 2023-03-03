import '../styles/article.css';
import {Col, Image, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {fetchOneBlog} from "../http/articleAPI";
const nl2br = require('react-nl2br');


const ArticlePage = () => {
    const [blog, setArticle] = useState({info: []});
    const {id} = useParams()

    useEffect(() => {
        fetchOneBlog(id).then((data => setArticle(data)))
    }, [])


    return (
        <div className='articlepage1' >
        <Row className='articlepage'>
            <Col md={12}>
                <h1>{blog.name}</h1>
                <Image className='imagePage' src={process.env.REACT_APP_API_URL + blog.img}/>
            </Col>
            <Col md={12} className='mt-4'>
                        <p className='textblog'>{nl2br(blog.description)}</p>
                <p align='right'>Дата опубликования: {blog.time}</p>
            </Col>
        </Row>
        </div>
    );
}

export default ArticlePage;
