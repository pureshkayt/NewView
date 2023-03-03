import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Dropdown, Form, Image, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {
    createDevice,
    deleteDevice,
    fetchBrands,
    fetchDevices,
    fetchTypes,
    updateDevice
} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";


const CreateDevice = observer( ({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const [deviceName, setDeviceName] = useState('');
    const [devicePrice, setDevicePrice] = useState('');
    const [deviceFile, setDeviceFile] = useState(null)

    useEffect(()=>{
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 5000).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]:value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const selectFileDevice = e => {
        setDeviceFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    const handleDelete = (id) => {
        deleteDevice(id).then(data => onHide());
    };
    const updateDev = (id) => {
        const formData = new FormData()
        formData.append('name', deviceName)
        formData.append('price', `${devicePrice}`)
        formData.append('img', deviceFile)
        updateDevice(id, formData).then((data) => onHide());
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
                    Добавить продукт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название продукта"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant="outline-dark"
                        onClick={addInfo}
                    >
                        Добавить характеристку
                    </Button>
                    {
                        info.map(i =>
                            <Row className="mt-4" key={i.number}>
                                <Col md={4} className="p-2">
                                    <Form.Control
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder="Введите название свойства"
                                    />
                                </Col>
                                <Col md={4} className="p-2">
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        placeholder="Введите описание свойства"
                                    />
                                </Col>
                                <Col md={4}className="p-2">
                                    <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant={"outline-danger"}>
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} disabled={!file} onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Редактировать продукт
                </Modal.Title>
            </Modal.Header>
            <Row className='align-items-center justify-content-center p-3'>
                {device.devices.map(device =>
                        <Col className='col-lg-auto'>
                            <Card className='align-items-center p-3 col-md-12' key={device.id} >
                                <Row>
                                    <Card.Body>
                                        <Card.Title>
                                            <Form>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={1}
                                                        placeholder="Изменить название"
                                                        defaultValue={device.name}
                                                        onChange={(event) => {
                                                            setDeviceName(event.target.value);
                                                        }}
                                                    />
                                                    <Form.Control
                                                        className="mt-3"
                                                        type="file"
                                                        onChange={selectFileDevice}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={1}
                                                        placeholder="Изменить содержимое статьи"
                                                        defaultValue={device.price}
                                                        onChange={(event) => {
                                                            setDevicePrice(event.target.value);
                                                        }}
                                                    />

                                                </Form.Group>
                                            </Form>
                                        </Card.Title>
                                        <Modal.Footer>
                                            <Button variant='outline-success' disabled={!deviceFile} onClick={() =>
                                                updateDev(device.id, {
                                                    name: deviceName,
                                                    price: devicePrice,
                                                    file: deviceFile,
                                                })
                                            }
                                            >
                                                Принять изменения
                                            </Button>
                                            <Button variant={"outline-danger"} onClick={() => handleDelete(device.id)}>Удалить товар</Button>
                                        </Modal.Footer>
                                    </Card.Body>
                                </Row>
                            </Card>
                        </Col>
                    )}
            </Row>
        </Modal>
    );
});


export default CreateDevice;