import '../styles/admin.css';
import {Button, Container} from "react-bootstrap";
import React, {useState} from "react";
import CreateBrand from "../components/modals/CreateBrand"
import CreateDevice from "../components/modals/CreateDevice"
import CreateType from "../components/modals/CreateType";
import CreateArticle from "../components/modals/CreateArticle";
import CreateSlider from "../components/modals/CreateSlider";


function Admin() {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [articleVisible, setArticleVisible] = useState(false)
    const [sliderVisible, setSliderVisible] = useState(false)

    return (
        <Container className="d-flex flex-column col-md-4 adminpan">
            <h1 align='center'>Панель управления</h1>
            <br/>
            <h3>Магазин</h3>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={() => setTypeVisible(true)}
            >
                Управление типом товара
            </Button>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={() => setBrandVisible(true)}
            >
                Управление брендом товара
            </Button>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={() => setDeviceVisible(true)}
            >
                Управление продуктами
            </Button>
            <br/>
            <h3>Блог</h3>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={() => setArticleVisible(true)}
            >
                Управление новостями
            </Button>
            <br/>
            <h3>Слайдер с акциями</h3>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={() => setSliderVisible(true)}
            >
                Управлять слайдами
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateArticle show={articleVisible} onHide={() => setArticleVisible(false)}/>
            <CreateSlider show={sliderVisible} onHide={() => setSliderVisible(false)}/>
        </Container>
    );
}

export default Admin;
