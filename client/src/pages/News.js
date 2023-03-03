import '../styles/news.css';
import ArticleBar from "../components/ArticleBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {fetchLabels} from "../http/articleAPI";
import {Container} from "react-bootstrap";
import PagesBlog from "../components/PagesBlog";


const News = observer(() => {
    const {blog} = useContext(Context)

    useEffect(() => {
        fetchLabels(blog.page, 8).then(data => {
            blog.setArticle(data.rows)
            blog.setTotalCountArt(data.count)
        })
    }, [blog.page])


    return (
        <>
        <Container>
                <ArticleBar/>
            <PagesBlog/>
        </Container>
        </>
    );
})

export default News;
