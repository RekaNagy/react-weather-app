import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <p className="footer-link">
            This project was coded by Réka Nagy and it is 
            <a href="https://github.com/RekaNagy/react-weather-app" target="_blank" rel='noreferrer'>
                open-sourced
            </a>{ " " }
        </p>
    )
}

export default Footer