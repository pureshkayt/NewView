import { Card, Col, Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import SiteBlock from "../components/SiteBlock";
import { useInView } from "react-intersection-observer";
import {useEffect, useState} from "react";


const DeviceItem = ({device}) => {
    const history = useHistory()
    const [isVisible1, setIsVisible1] = useState(false);
    const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView1) {
            setIsVisible1(true);
        }
    }, [inView1]);

    return (
        <Col md={3} className={"mt-3"} ref={ref1}>
            <SiteBlock isVisible={isVisible1}>
            <Card  className='devitem' style={{cursor: 'pointer'}} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <Image src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='nameprice'>
                    <div>
                        <strong>{device.price} ₽</strong>
                    </div>
                <div>
                    <p>{device.name}</p>
                </div>

                </div>
            </Card>
            </SiteBlock>
        </Col>
    );
};

export default DeviceItem;