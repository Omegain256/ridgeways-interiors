import React from 'react'
import './Footer.css'
import logo from '../assets/images/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col about">
                    <a href="/" className="footer-logo-link">
                        <img src={logo} alt="Ridgeways Interiors" className="footer-logo-img" />
                    </a>
                    <p className="footer-about-text">
                        Premium window treatments and home accents in Nairobi.
                    </p>
                </div>

                <div className="footer-col links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#process">How It Works</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-col contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>📍 Ridgeways, Nairobi, Kenya</li>
                        <li>📞 +254 720 692 390</li>
                        <li>✉️ info@ridgewaysinterior.co.ke</li>
                        <li>⏰ Mon - Sat: 8:00 AM - 6:00 PM</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Ridgeways Interior. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
