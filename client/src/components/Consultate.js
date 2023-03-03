import React, { useState, useEffect } from 'react';
import "../styles/components/consultate.css"
import {Button, FormControl, FormGroup, Navbar, Form, Modal} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios';

const Consultate = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validateForm = () => {
        if (name.trim() === "" || surname.trim() === "" || phone.trim() === "" || message.trim() === "") {
            alert("Все поля обязательны для заполнения");
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/send-email', {
            name,
            surname,
            phone,
            message
        })
            .then(response => {
                console.log(response.data);
                setName('');
                setSurname('');
                setPhone('');
                setMessage('');
            })
            .catch(error => {
                console.log(error);
            });
        if (validateForm()) {
            alert(`Имя: ${name}\nФамилия: ${surname}\nТелефон: ${phone}\nСообщение: ${message}`);
            handleClose();
            alert(`Успешно! Скоро мы вам перезвоним`);
        }
    };

    return (
        <Navbar className={"sticky-top consu"} align={'center'}>
            <Container className="justify-content-center">
                <div className="row cons" style={{width:'100%'}}>
                    <div className="col-md-6 align-self-center adress">
                        <p align='center'>Ул. Сухэ-батора, д. 33 <FontAwesomeIcon icon={faPhone} /> <a href="tel:+738524747555" className='text-decoration-none'>+7 (3852) 474-555</a> <br/> Ул. Попова, д. 107 <FontAwesomeIcon icon={faPhone} /> <a href="tel:+79069682108" className='text-decoration-none'>+7 (906) 968-21-08</a></p>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <Button className="but1" onClick={handleShow}>Записаться на консультацию</Button>
                    </div>
                </div>
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Записаться на консультацию</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup controlId="formFirstName">
                                    <Form.Label>Имя</Form.Label>
                                    <FormControl
                                        type="text"
                                        name="name"
                                        value={name}
                                        placeholder="Введите имя"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup controlId="formSurnameName">
                                    <Form.Label>Фамилия</Form.Label>
                                    <FormControl
                                        type="text"
                                        name="surname"
                                        value={surname}
                                        placeholder="Введите фамилию"
                                        onChange={(e) => setSurname(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup controlId="formPhone">
                                    <Form.Label>Телефон</Form.Label>
                                    <PhoneInput
                                        type="tel"
                                        name="phone"
                                        placeholder="Введите телефон"
                                        country={"ru"}
                                        value={phone}
                                        onChange={(value) => setPhone(value)}
                                    />
                                </FormGroup>
                                <FormGroup controlId="formMessage">
                                    <Form.Label>Ваш запрос</Form.Label>
                                    <FormControl
                                        as="textarea"
                                        rows="3"
                                        name="message"
                                        value={message}
                                        placeholder="Введите сообщение"
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </FormGroup>
                                <div className="modal-footer">
                                    <Button variant="secondary" onClick={handleClose}>
                                        Закрыть
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Отправить
                                    </Button>
                                </div>
                            </Form>
                        </Modal.Body>
                    </Modal>

                </div>
            </Container>
        </Navbar>
    );
}

export default Consultate;