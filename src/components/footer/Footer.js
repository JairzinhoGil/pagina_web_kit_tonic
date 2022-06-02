import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-info">
            <h1>Kit Tonic All Spice</h1>
            <p> The best moments have flavor </p>
        </div>
        <div className="footer-contact"> 
            <h3>Contactanos</h3>
            <p> Y Disfruta!</p>
        </div>
        <div className="footer-sns">
            <div className="design-by"> Design by JGH </div>
            <div className="sns-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram instagram"></i>
                </a>   
                <a href="https://twitter.com" target="_blank" rel="noreferrer"> 
                    <i className="fab fa-twitter twitter"></i>  
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </footer>
);
};

export default Footer