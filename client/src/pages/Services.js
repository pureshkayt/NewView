import '../styles/services.css';
import {Button} from "react-bootstrap";
import {EQUIPMENT_ROUTE} from "../utils/consts";

function Services() {
    return (
        <div>
        <div className='row tables justify-content-center'>
            <p align='center' style={{padding: '2%'}}> <strong> ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
                <br/>
                «Медицинский центр – Новый взгляд»
<br/>
               ИНН 2222779085, КПП 222201001, ОГРН 1092223002410</strong>
<br/></p>
            <hr className='line6'/>
            <h1 align='center' style={{color: '#00a8e2'}}>Прейскурант цен</h1>
            <div className='col-md-7 tableblog'>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"><p>Наименование услуги</p></th>
                        <th scope="col"><p>Цена</p></th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <th scope="row">1</th>
                        <td><p>Консультация врача-офтальмолога<br/>(комплексный осмотр/<b>Первичный</b>)</p></td>
                        <td><p>700₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><p><b>Повторная консультация</b></p></td>
                        <td><p>500₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><p>Авторефрактометрия</p></td>
                        <td><p>200₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td><p>Подбор очков любой сложности (авторерактометрия)</p></td>
                        <td><p>300₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td><p>Измерение ВГД</p></td>
                        <td><p>150₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td><p>Массаж век</p></td>
                        <td><p>200₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td><p>Осмотр глазного дна</p></td>
                        <td><p>500₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td><p>Определение полей зрения</p></td>
                        <td><p>500₽</p></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h1 align='center' style={{color: '#00a8e2'}}>Комплекс лечебно-оздоровительных<br/>мероприятий</h1>
            <div className='col-md-7 tableblog justify-content-center'>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"><p>Наименование услуги</p></th>
                        <th scope="col"><p>Цена</p></th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <th scope="row">1</th>
                        <td><p>Магнитотерапия</p></td>
                        <td><p>80₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><p>Хромотерапия(очки Панкова)</p></td>
                        <td><p>80₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><p>Деннас-терапия(очки Деннас, Диоденнас карандаш)</p></td>
                        <td><p>80₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td><p>СПЕКЛ-М (сеанс)</p></td>
                        <td><p>200₽</p></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td><p>Лечение на аппарате "Визотронник МЗ" (сеанс)</p></td>
                        <td><p>200₽</p></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    <div className='col-md-12 but5'>
        <a className='text-decoration-none' href={EQUIPMENT_ROUTE}><Button  variant={"outline-info"}>Узнать больше</Button></a>
    </div>
        </div>
    );
}

export default Services;
