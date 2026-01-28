import React from 'react'
import './Footer.css'
import logo from '../assets/images/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container centered-footer">
                <div className="footer-brand">
                    <img src={logo} alt="Ridgeways Interiors" className="footer-logo-large" />
                    <p className="footer-tagline">Transforming Spaces. Defining Luxury.</p>
                </div>

                <nav className="footer-nav">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="https://wa.me/254720692390" target="_blank" rel="noopener noreferrer">Contact</a>
                </nav>

                <div className="footer-separator"></div>

                <div className="footer-bottom-simple">
                    <p>&copy; {new Date().getFullYear()} Ridgeways Interiors. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
