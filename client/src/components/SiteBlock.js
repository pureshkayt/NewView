import React from "react";
import '../styles/main.css'


function SiteBlock({ isVisible, children }) {
    return (
        <div className={`site-block ${isVisible ? "visible" : ""}`}>
            {children}
        </div>
    );
}

export default SiteBlock;