import {Button, Card, Col, Form, Modal, Row} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {createLabel, deleteBlog, fetchLabels, updateBlog} from "../../http/articleAPI";
import {Context} from "../../index";



const CreateArticle = ({show, onHide}) => {
    const {blog} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [file, setFile] = useState(null)
    const [blogName, setBlogName] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [blogTime, setBlogTime] = useState('');
    const [blogFile, setBlogFile] = useState(null)

    useEffect(() => {
        fetchLabels(null, 10000, 1, 20).then(data => {
            blog.setArticle(data.rows)
            blog.setTotalCountArt(data.count)
        })
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const selectFileBlog = e => {
        setBlogFile(e.target.files[0])
    }

    const addArticle = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('time', time)
        formData.append('img', file)
        createLabel(formData).then(data => onHide())
    }

    const handleDelete = (id) => {
        deleteBlog(id).then(data => onHide());
    };

    const updateArticle = (id) => {
        const formData = new FormData()
        formData.append('name', blogName)
        formData.append('description', blogDescription)
        formData.append('time', blogTime)
        formData.append('img', blogFile)
        updateBlog(id, formData).then((data) => onHide());
    };



    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новость
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите заголовок"}
                    />
                    <Form.Group className="mt-3" controlId="formFile">
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    </Form.Group>
                    <Form.Group className="mt-3" >
                        <Form.Control
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            as="textarea"
                            rows={3}
                            placeholder={"Содержимое статьи"}/>
                    </Form.Group>
                    <Form.Control
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        className="mt-3"
                        placeholder={"Время публикации (ДД.ММ.ГГГГ)"}
                    />
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addArticle} disabled={!file}>Добавить</Button>
            </Modal.Footer>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Редактирование статей
                </Modal.Title>
            </Modal.Header>
            <div>
                <Row className='align-items-center justify-content-center p-3'>
                {blog.articles.map(blog =>
                    <Col className='col-lg-auto'>
                    <Card className='align-items-center p-3 col-md-12' key={blog.id} >
                        <Row>
                            <Card.Body>
                                <Card.Title>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows={1}
                                                placeholder="Изменить содержимое статьи"
                                                defaultValue={blog.name}
                                                onChange={(event) => {
                                                    setBlogName(event.target.value);
                                                }}
                                            />
                                            <Form.Group>
                                                <Form.Control
                                                    className="mt-3"
                                                    type="file"
                                                    class="form-control"
                                                    onChange={selectFileBlog}
                                                />
                                                <div className="invalid-feedback">Пример обратной связи неверной формы
                                                    выбора файла
                                                </div>
                                            </Form.Group>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                cols="150"
                                                placeholder="Изменить содержимое статьи"
                                                defaultValue={blog.description}
                                                onChange={(event) => {
                                                    setBlogDescription(event.target.value);
                                                }}
                                            />

                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows={1}
                                                placeholder="Изменить дату опубликования"
                                                defaultValue={blog.time}
                                                onChange={(event) => {
                                                    setBlogTime(event.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Card.Title>
                                <Modal.Footer>
                                    <Button variant='outline-success' disabled={!blogFile} onClick={() =>
                                        updateArticle(blog.id, {
                                            name: blogName,
                                            description: blogDescription,
                                            time: blogTime,
                                            file: blogFile,
                                        })
                                    }
                                    >
                                        Принять изменения
                                    </Button>
                                    <Button variant={"outline-danger"} onClick={() => handleDelete(blog.id)}>Удалить статью</Button>
                                </Modal.Footer>
                            </Card.Body>
                        </Row>
                    </Card>
                    </Col>
                )}
                </Row>
            </div>
        </Modal>

    );
}

export default CreateArticle;

