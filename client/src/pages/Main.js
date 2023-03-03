import SliderActsii from "../components/Carousel"
import '../styles/main.css';
import {Button, Card, Image, ListGroup, Nav,} from "react-bootstrap";
import popova1 from '../assets/photo_2023-03-03_01-09-41.jpg'
import cons from '../assets/cons.jpg'
import {ARTICLE_ROUTE, NEWS_ROUTE, SERVICES_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {fetchSlide} from "../http/sliderAPI";
import {fetchLabels} from "../http/articleAPI";
import { fetchDevicesMain} from "../http/deviceAPI";
import video from "../assets/IMG_7760.MP4"
import DeviceItem from "../components/DeviceItem";
import SiteBlock from "../components/SiteBlock";
import { useInView } from "react-intersection-observer";
import glaz1 from '../assets/proverka.jpg'
import glaz2 from '../assets/dno1.jpg'
import glaz3 from '../assets/aparat.jpg'
import glaz3webm from '../assets/diagnostika.jpg'
import glaz4 from '../assets/vrack1.jpg'
import glaz5 from '../assets/podbor.jpg'
import glaz6 from '../assets/dans2.jpg'


const Main = observer(() => {
    const {slider} = useContext(Context)
    const {device} = useContext(Context)
    const {blog} = useContext(Context)
    const history = useHistory()
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
    const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
    const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });
    const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.5 });

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (event) => {
        setX(event.clientX / window.innerWidth);
        setY(event.clientY / window.innerHeight);
    };


    useEffect(() => {
        fetchSlide().then(data => slider.setSlider(data))
        fetchDevicesMain( 1, 4).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page]
    )
    useEffect(() => {
        fetchLabels(1, 5).then(data => {
            blog.setArticle(data.rows)
            blog.setTotalCountArt(data.count)
        })
    }, [blog.page])


    useEffect(() => {
        if (inView2) {
            setIsVisible2(true);
        }
    }, [inView2]);

    useEffect(() => {
        if (inView3) {
            setIsVisible3(true);
        }
    }, [inView3]);
    useEffect(() => {
        if (inView4) {
            setIsVisible4(true);
        }
    }, [inView4]);
    useEffect(() => {
        if (inView5) {
            setIsVisible5(true);
        }
    }, [inView5]);


    return (
        <div>
            <div class="video-bg">
                    <video src={video} type="video/mp4" title='video' autoPlay muted loop></video>
                        <div className="row justify-content-center video-bg__content" >
                        <div className="col-md-5 align-self-center video1">
                            <h1 className='zag'>Медицинский центр <br/>"Новый взгляд"</h1>
                            <Button className='but2' href={NEWS_ROUTE}>Читать новости</Button>
                            <Button className='but2 but3' href={SHOP_ROUTE}>Магазин</Button>
                        </div>

                        <div className='col-md-6 slid align-self-center' ref={ref4}>
                            <SiteBlock isVisible={isVisible4}><SliderActsii /></SiteBlock>
                        </div>
                    </div>
            </div>

            <div className='row choice justify-content-center p-4'  >

                <Nav className='justify-content-center' >

                    <h1 className='obor obor1' align='left'>
                        Наши услуги
                    </h1>

                    <div className="col-md-2 card-item" >

                        <NavLink to={SERVICES_ROUTE} className="text-decoration-none text-reset ">
                            <Card className='card-item1'>
                                <Card.Img variant="top" src={glaz1} className='cardimg'/>
                                <Card.Body>

                                    <Card.Title>Проверка зрения </Card.Title>
                                    <Card.Text className='chit'>
                                        Читать подробнее
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="col-md-2 card-item">
                        <NavLink to={SERVICES_ROUTE} className="text-decoration-none text-reset">
                            <Card className='card-item1'>
                                <Card.Img variant="bottom" src={glaz2} className='cardimg' />
                                <Card.Body>
                                    <Card.Title>Исследование глазного дна</Card.Title>
                                    <Card.Text className='chit'>
                                        Читать подробнее
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="col-md-2 card-item">
                        <NavLink to={SERVICES_ROUTE} className="text-decoration-none text-reset">
                            <Card className='card-item1'>
                                <Card.Img variant="top" src={glaz3} className='cardimg'/>
                                <Card.Body>
                                    <Card.Title>Обследование на глаукому/катаракту</Card.Title>
                                    <Card.Text className='chit'>
                                        Читать подробнее
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="col-md-2 card-item" >
                        <NavLink to={SERVICES_ROUTE} className="text-decoration-none text-reset">
                            <Card className='card-item1'>
                                <Card.Img variant="top" src={glaz3webm} className='cardimg' />
                                <Card.Body>
                                    <Card.Title>Компьютерная диагностика</Card.Title>
                                    <Card.Text className='chit'>
                                        Читать подробнее
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="col-md-2 card-item" >
                        <NavLink to={SERVICES_ROUTE} className="text-decoration-none text-reset">
                            <Card className='card-item1'>
                                <Card.Img variant="top" src={glaz4} className='cardimg'/>
                                <Card.Body>
                                    <Card.Title>Назначение лечения</Card.Title>
                                    <Card.Text className='chit'>
                                        Читать подробнее
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="col-md-2 card-item" >
                        <NavLink to={SERVICES_ROUTE} className="text-decoration-none text-reset">
                            <Card className='card-item1'>
                                <Card.Img variant="top" src={glaz5} className='cardimg'/>
                                <Card.Body>
                                    <Card.Title>Подбор очков</Card.Title>
                                    <Card.Text className='chit'>
                                        Читать подробнее
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="col-md-2 card-item">
                        <NavLink to={SERVICES_ROUTE} className="text-decoration-none text-reset">
                            <Card className='card-item1'>
                                <Card.Img variant="bottom" src={glaz6} className='cardimg' />
                                <Card.Body>
                                    <Card.Title>Физиолечение</Card.Title>
                                    <Card.Text className='chit'>
                                        Читать подробнее
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </div>

                </Nav>

            </div>



            <div className='actsii' id='actsii1'>
            <div className='row justify-content-center' >
                <div className='col-md-10 '>
                    <div className="row newsmain">
                        <h1 className='obor1'>Новые товары</h1>

                        {device.devices.map((device) => (
                            <DeviceItem key={device.id} device={device}/>
                        ))}
                    </div>
                </div>

            </div>

            </div>

            <div className='treug1'></div>

            <div className="row info justify-content-center" >

                    <div className='col-lg-6 info1 parallax'

                         onMouseMove={handleMouseMove}
                         style={{
                             transform: `translate(-${x * 20}px, -${y * 20}px)`,
                         }}>

                        <p className='text' >
                            <h1 className={'preim'}>Почему мы?</h1>

                            <br/>  Обратившись к нам Вы получите <b>всю необходимую информацию о состоянии своих глаз.</b> После этого Вам будет назначено адекватное лечение — аппаратное, медикаментозное или коррекция зрения.

                            <br/><br/> <b>Обращаясь к нам, Барнаульцы и гости нашего города сэкономят своё время.</b> В медицинском центре «Новый Взгляд» можно пройти обследование, лечение и подобрать коррекцию — очки или контактные линзы.

                            <br/><br/> <b>«Новый Взгляд» — семейная клиника.</b> Мы помогаем взрослым и детям сохранить зрение. При необходимости назначим гимнастику для глаз в домашних условиях, аппаратное лечение в нашем центре. При должной гигиене зрения вы и ваш ребёнок сможете сохранить здоровье на многие годы.

                            <br/><br/> <b>Индивидуальный подход к каждому пациенту и высокое качество медицинских услуг по доступным ценам.</b>

                            </p>

                    </div>

                    <div className='col-lg-4 align-self-center' ref={ref2}>
                        <SiteBlock isVisible={isVisible2}> <img src={cons} alt="" className='glasses' width='80%'/></SiteBlock>
                    </div>

                </div>

            <div id="nedooval"></div>
            <div className='info2'>
                <div className="row onasblock justify-content-center info3" >
                    <div className='col-lg-6 align-self-center'>

                        <h1 className='title2'>О нас</h1>

                        <p className='onas text'> Медицинский центр "Новый взгляд" предоставляет услуги на территории Алтайского края с 2009 года. Отличительной особенностью работы Центра является комплексная офтальмологическая помощь детям и взрослым. В услуги центра входит как лечение глазных болезней медикаментозным или физиотерапевтическим методом, так и оптическая помощь взрослому и детскому населению. Специалисты Медицинского Центра в короткие сроки изготовят очки по рецепту.
                            <br/><br/>    Ранняя диагностика глазных заболеваний осуществляется благодаря регулярной профикалтической работе, включающей в себя:
                            <br/>    1. Офтальмологический осмотр беременных женщин;
                            <br/>    2. Профилактические осмотры детей на первом году жизни и ежегодно;
                            <br/>    3. Профилактические ежегодные осмотры взрослого населения.
                            <br/><br/>    Медицинские услуги в Центре "Новый взгляд" оказываются на основании Лицензии выданной Главным управлением Алтайского края по здравоохранению и фармацевтической деятельности № ЛО-22-01-001705 от 31.05.2013 в соответствии с "Правилами предоставления платных медицинских услуг населению медицинскими учреждениями", утвержденными Постановлением Правительства РФ от 04.10.2012 N 1006, после заключения Договора на оказание платных медицинских услуг в Медицинском центре "Новый взгляд"
                        </p>


                    </div>

                    <div className='col-lg-5 order-first align-self-center' ref={ref3}>
                        <SiteBlock isVisible={isVisible3}><Image src={popova1} className='onasdiv'></Image></SiteBlock>
                    </div>

                </div>
        </div>

            <div className="row justify-content-center newsmain1" ref={ref5}>
                <div className='col-md-5'>
                    <h1 className='obor'>Последние новости</h1>
                </div>
                <div className='col-md-7'>
                    <SiteBlock isVisible={isVisible5}>
                    <ListGroup>
                        {blog.articles.map(blog =>
                            <ListGroup.Item className='listnews'>
                                <h1>{blog.name}</h1>
                                <p>{blog.description.split(' ').slice(0, 25).join(' ')}...</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button className="btn btn-outline-dark me-md-2" type="button" onClick={() => history.push(ARTICLE_ROUTE + '/' + blog.id)}>Читать новость</button>
                                </div>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                    </SiteBlock>
                </div>
            </div>


        </div>
    );
})

export default Main;
