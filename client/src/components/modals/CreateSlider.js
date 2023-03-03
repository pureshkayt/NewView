import {Button, Card, Col, Form, Image, Modal, Row} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {createSlide, deleteSlide, fetchSlide} from "../../http/sliderAPI";
import {Context} from "../../index";



const CreateSlider = ({show, onHide}) => {
    const {slider} = useContext(Context)
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [file, setFile] = useState(null)

    useEffect(()=>{
        fetchSlide().then(data => slider.setSlider(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addSlider = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('url', url)
        formData.append('img', file)
        createSlide(formData).then(data => onHide())
    }
    const handleDelete = (id) => {
        deleteSlide(id).then(data => onHide());
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
                    Добавить слайд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={"Введите заголовок"}
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <Form.Group className="mt-3" >
                        <Form.Control
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                            placeholder={"Ссылка на рекламу"}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} disabled={!file} onClick={addSlider}>Добавить</Button>
            </Modal.Footer>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить слайд
                </Modal.Title>
            </Modal.Header>
                <Row className='align-items-center justify-content-center p-3'>
                {slider.sliders.map(slider =>
                    <Col className='col-md-auto'>
                    <Card className='align-items-center p-3' key={slider.id}>
                        <div>
                            {slider.title}
                        </div>
                        <div>
                            <Button variant={"danger"} onClick={() => handleDelete(slider.id)}>Удалить</Button>
                        </div>
                    </Card>
                    </Col>
                )}
                </Row>
        </Modal>
    );
}

export default CreateSlider;

