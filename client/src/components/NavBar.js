import '../styles/components/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    CONTACTS_ROUTE, EQUIPMENT_ROUTE,
    MAIN_ROUTE,
    NEWS_ROUTE,
    REVIEWS_ROUTE,
    SERVICES_ROUTE,
    SHOP_ROUTE
} from "../utils/consts";
import logo from '../assets/logo.png'
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";



const NavBar = observer ( () => {
    return (
        <Navbar collapseOnSelect expand="lg" className={'navbar-text'} variant={"dark"}>
            <Container>
                <NavLink style={{color: 'white'}} to={MAIN_ROUTE}><img width={80} height={50} src={logo} alt=""/></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <hr/>
                        <NavLink to={SERVICES_ROUTE} className={'silki'}>УСЛУГИ</NavLink>
                        <NavLink to={SHOP_ROUTE} className={'silki'}>МАГАЗИН</NavLink>
                        <NavLink to={NEWS_ROUTE} className={'silki'}>БЛОГ</NavLink>
                        <NavLink to={EQUIPMENT_ROUTE} className={'silki'}>ПАЦИЕНТАМ</NavLink>
                        <NavLink to={REVIEWS_ROUTE} className={'silki'}>ОТЗЫВЫ</NavLink>
                        <NavLink to={CONTACTS_ROUTE} className={'silki'}>КОНТАКТЫ</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
})

export default NavBar;
