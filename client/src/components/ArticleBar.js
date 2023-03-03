import Card from 'react-bootstrap/Card';
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {ARTICLE_ROUTE} from "../utils/consts";


const ArticleBar = observer( () => {
    const {blog} = useContext(Context)
    const history = useHistory()

    return (
        <div className='row artblogrow'>
            {blog.articles.map((blog) => (
                <Col lg={3} className="" >
        <Card className='artblog' key={blog.id} style={{ cursor: 'pointer'}} onClick={() => history.push(ARTICLE_ROUTE + '/' + blog.id)}>
                    <Card.Img variant="top" src={process.env.REACT_APP_API_URL + blog.img} />
            <Card.Body>
                <Card.Title>{blog.name}</Card.Title>
                <Card.Text>
                    {blog.description.split(' ').slice(0, 15).join(' ')}...
                </Card.Text>
                <Card.Text className='chit'>
                    Читать далее...
                </Card.Text>
                <Card.Text style={{color: 'gray'}}><p className="date">Дата опубликования: {blog.time}</p></Card.Text>
            </Card.Body>
        </Card>
                </Col>
                ))}
        </div>
    );
})

export default ArticleBar;