import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import '../styles/shop.css';
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useRef, useState} from "react";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {$host} from "../http";
import {DEVICE_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";


const Shop = observer( () => {
    const {device} = useContext(Context)
    const history = useHistory()
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const searchButtonRef = useRef();
    const [isSearched, setIsSearched] = useState(false);

    useEffect(()=>{
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 24).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand])


    const handleSearch = async () => {
        if (!searchQuery) {
            return;
        }
        setIsSearching(true);
        const {data} = await $host.get(`/api/device/search?q=${searchQuery}`);
        setSearchResults(data);
        setIsSearching(false);
        setIsSearched(true);
    };
    const handleReset = () => {
        setSearchQuery('');
        setSearchResults([]);
        setIsSearched(false);
        device.setSelectedBrand({}); // Сбросить выбранный бренд
        device.setSelectedType({}); // Сбросить выбранный тип
        fetchDevices(null, null, device.page, 24).then(data => { // Обновить устройства на странице
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    };

    return (
        <Container >
            <Row className='m-3'>
                <Col md={3} className='filters p-4'>
                    <h2>Фильтры</h2>
                    <Form>
                        <div className='row justify-content-start'>
                        <div className='col p-1'>
                        <Form.Group controlId="searchQuery">
                            <Form.Control
                                type="text"
                                placeholder="Поиск по названию"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyDown}
                            />
                        </Form.Group>
                        </div>
                        <div className="btn-group p-1 but4 col-md-auto"  role="group" aria-label="Basic example">
                            {isSearched && (
                                <Button variant="secondary" onClick={handleReset}>Сброс</Button>
                            )}
                        <Button variant="primary"  ref={searchButtonRef} onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>

                        </div>
                        </div>
                        <br/>
                    </Form>
                    <h2>Типы</h2>
                    <TypeBar/>
                    <br/>
                    <h2>Бренды</h2>
                    <BrandBar/>
                    <div className='row justify-content-center p-3'>
                    <Button variant={"outline-primary"} onClick={handleReset} className='col-md-12' >Сбросить фильтры</Button>
                    </div>
                </Col>
                <Col md={9}>
                    <div>
                        <Row>
                            {isSearched && searchResults.length === 0 && <p>Товар не найден</p>}
                        {isSearching ? (
                                <p>Поиск...</p>
                            )
                            : (
                                searchResults.length === 0 ? (
                                        <DeviceList/>
                                )
                            : (
                            searchResults.map((device) => (
                            <Col md={3} className={"mt-3"}>
                                    <Card  className='devitem' style={{cursor: 'pointer'}} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                                        <Image className='cardimg' src={process.env.REACT_APP_API_URL + device.img}/>
                                        <div className='nameprice'>
                                            <div>
                                                <strong>{device.price} ₽</strong>
                                            </div>
                                            <div>
                                                <p>{device.name}</p>
                                            </div>
                                        </div>
                                    </Card>
                            </Col>
                            )
                        )
                                    ))}
                        </Row>
                    </div>

                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
