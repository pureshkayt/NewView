import React, {useEffect} from 'react';
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../styles/components/ContacrUs.css'

const ContactUs = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    const telegramUrl = 'https://t.me/+Qk0OKayrRFQ4ODgy';
    const stroka = "Свяжитесь с нами в Telegram"

    return (
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
           className="telegram-button text-decoration-none"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ?  stroka : <FontAwesomeIcon className='ictel' icon={faTelegram}></FontAwesomeIcon>}
        </a>
    );
};

export default ContactUs;