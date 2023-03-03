import '../styles/devicepage.css';
import { Col, Image, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {fetchOneDevice} from "../http/deviceAPI";

function DevicePage() {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then((data => setDevice(data)))
    }, [])
    return (
<div className='devicepage1'>
            <Row className='justify-content-center devicepage align-items-center'>
                <Col md={6} className="col-md-6">
                    <h1 className='imgh1'>{device.name}</h1>
                    <Image className='imgitem' src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={6} className="col-md-6 harcol">
                    <strong><p className='har'>Характеристики</p></strong>
                    {device.info.map((info, index) =>
                        <Col  key={info.id} style={{background: index % 2 === 0 ? 'rgba(118, 215, 245, 0.15)' : 'transparent', padding: 10}}>
                            <p><b>{info.title}</b>: <i>{info.description}</i></p>
                        </Col>
                    )}
                </Col>
            </Row>
</div>
    );
}

export default DevicePage;
