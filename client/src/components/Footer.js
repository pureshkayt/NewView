import '../styles/footer.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {
    CONTACTS_ROUTE,
    EQUIPMENT_ROUTE, MAIN_ROUTE, NEWS_ROUTE,
    REVIEWS_ROUTE,
    SERVICES_ROUTE,
    SHOP_ROUTE
} from "../utils/consts";
import React from "react";
import {faPhone} from "@fortawesome/free-solid-svg-icons";


const Footer = () => (
    <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row justify-content-center">
            <div className="col-md-6 mt-md-0 mt-3">
                <a href={MAIN_ROUTE} className='text-decoration-none text-reset'>
                <h5 className="text-uppercase"><img width={80} height={50} src={logo} alt=""/>Новый взгляд</h5>
                </a>
                <hr className='line6'/>
                <p>Медицинский центр</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Карта сайта</h5>
                <ul className="list-unstyled">
                    <li className='silka2'><a href={SERVICES_ROUTE} className='text-decoration-none text-reset'>УСЛУГИ</a></li>
                    <li className='silka2'><a href={SHOP_ROUTE} className='text-decoration-none text-reset'>МАГАЗИН</a></li>
                    <li className='silka2'><a href={NEWS_ROUTE} className='text-decoration-none text-reset'>БЛОГ</a></li>
                    <li className='silka2'><a href={EQUIPMENT_ROUTE} className='text-decoration-none text-reset'>ПАЦИЕНТАМ</a></li>
                    <li className='silka2'><a href={REVIEWS_ROUTE} className='text-decoration-none text-reset'>ОТЗЫВЫ</a></li>
                    <li className='silka2'><a href={CONTACTS_ROUTE} className='text-decoration-none text-reset'>КОНТАКТЫ</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">КОНТАКТЫ</h5>
                <ul className="list-unstyled">
                    <li>УЛ. СУХЭ-БАТОРА, Д. 33<br/><FontAwesomeIcon icon={faPhone} /> +7 (3852) 474-555</li>
                    <hr/>
                    <li>УЛ. ПОПОВА Д. 107<br/><FontAwesomeIcon icon={faPhone} /> +7 (906) 968-21-08</li>
                    <hr/>
                    <li>EMAIL: newzrenie22@mail.ru</li>
                </ul>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-3 mb-md-0 mb-3 ">
                <a href="https://instagram.com/zrenie_brn?igshid=YmMyMTA2M2Y=" className='text-decoration-none text-reset icons'>
                        <FontAwesomeIcon className='silka2' icon={faInstagram} />
                </a>
                <a href="https://t.me/+Qk0OKayrRFQ4ODgy" className='text-decoration-none text-reset icons'>
                        <FontAwesomeIcon className='silka2' icon={faTelegram} />
                </a>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">
        © 2023 Все права защищены: взгляд-алтай.рф
    </div>

</footer>
)

export default Footer