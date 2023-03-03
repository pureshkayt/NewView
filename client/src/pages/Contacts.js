import '../styles/contacts.css';
import {Image} from "react-bootstrap";
import Popova1 from '../assets/popova1.jpg'
import Suhe1 from '../assets/suhe1.jpg'

function Contacts() {
    return (
        <div>
            <h1 className='title6' align='center'>Контакты</h1>
        <div className='row contacts justify-content-center'>
            <div className='col-md-4 adresi align-self-center'>
                <p align='center'>
                    <strong>Адрес:</strong> г. Барнаул, ул. Сухэ-Батора, 33
                    <br/><br/><strong>Телефон:</strong> <a href="tel:+738524747555">+7 (3852) 474-555</a>
                    <br/><strong>Email:</strong> newzrenie22@mail.ru
                    <br/><br/><strong>График работы:</strong> <br/>
                    ПН-ПТ с 9.00-20.00 без перерыва
                    <br/>СБ с 9.00-18.00 без перерыва
                    <br/>ВС с 10.00-17.00 без перерыва
                </p>
                <div className='row justify-content-center'>
                    <div className='imagecont'>
                        <Image className='imagecont' src={Suhe1}/>
                    </div>
                </div>

            </div>
        <hr className='line5'/>

            <div className='col-md-4 adresi adresi1 align-self-center'>
                <p align='center'>
                    <strong>Адрес:</strong> г. Барнаул, ул. Попова, 107
                    <br/><br/><strong>Телефон:</strong> <a href="tel:+79069682108">+7 (906) 968-21-08</a>
                    <br/><strong>Email:</strong> newzrenie22@mail.ru
                    <br/><br/><strong>График работы:</strong> <br/>ПН-ВС с 10.00-19.00
                    <br/>Без перерыва, без выходных
                    <br/><br/>
                </p>
                <div className='imagecont imagecont1'>
                <div className='row justify-content-center'>

                <Image className='imagecont imagecont1' src={Popova1}/>
                </div>
                </div>
            </div>

        </div>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7dd243ac3bf0a5dd31ce109f323baf336ee6017f185f5665d6b3bba7ef037732&amp;source=constructor"
                width="100%" height="437" frameBorder="0"></iframe>
        </div>
    );
}

export default Contacts;
