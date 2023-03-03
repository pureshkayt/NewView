import Carousel from 'react-bootstrap/Carousel';
import "../styles/components/carousel.css"
import {Button, Image } from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";


const SliderActsii = observer(() => {
    const {slider} = useContext(Context)
    return (
        <Carousel fade>
            {slider.sliders.map(slider =>
            <Carousel.Item key={slider.id}>
                <Image className="d-block w-100 shadow" src={process.env.REACT_APP_API_URL + slider.img}></Image>
                    <Carousel.Caption>
                    <h3 className='slidetext'>{slider.title}</h3>
                    <a href={slider.url}><Button className='slidebut'>Подробнее</Button></a>
                </Carousel.Caption>
            </Carousel.Item>
            )}
        </Carousel>
    )
})

export default SliderActsii;