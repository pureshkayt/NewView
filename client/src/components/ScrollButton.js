import React from 'react';
import '../styles/components/ScrollToTop.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className="scroll-to-top-button" onClick={handleClick}>

            <FontAwesomeIcon className='scrollbut' icon={faArrowUp} />
        </button>
    );
};

export default ScrollToTop;