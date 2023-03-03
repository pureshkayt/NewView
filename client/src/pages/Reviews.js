import '../styles/reviews.css';
import flamp from "../scripts/flamp";
import flamp2 from "../scripts/flamp2";
import { Helmet } from "react-helmet";


function Reviews() {
    flamp()
    flamp2()

    return (
        <div className='mainreviews'>
            <div className='row justify-content-center'>
                <div className='col-md-auto otziv'>
                    <h1>Отзывы с Флампа</h1>
                </div>
            </div>
            <div className='row reviews justify-content-center'>
                    <div className='col-md-5'>
                        <p className='text otzi'>Сухэ-батора, д. 33</p>
                        <a className="flamp-widget" href="//barnaul.flamp.ru/firm/novyjj_vzglyad-563478234690597"
                           data-flamp-widget-type="responsive-new" data-flamp-widget-id="563478234690597"
                           data-flamp-widget-width="100%" data-flamp-widget-count="3">Отзывы о нас на Флампе</a>

                    </div>
                <div className='col-md-5'>
                    <p className='text otzi'>Попова, д. 107</p>
                    <a className="flamp-widget" href="//barnaul.flamp.ru/firm/novyjj_vzglyad-70000001034422092"
                       data-flamp-widget-type="responsive-new" data-flamp-widget-id="70000001034422092"
                       data-flamp-widget-width="100%" data-flamp-widget-count="3">Отзывы о нас на Флампе</a>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
