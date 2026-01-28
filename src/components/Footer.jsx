import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col about">
                    <h3 className="footer-logo">RIDGEWAYS<span>INTERIOR</span></h3>
                    <p className="footer-about-text">
                        Premium window treatments and home accents in Nairobi.
                    </p>
                    <p>Phone: <a href="https://wa.me/254720692390" target="_blank" rel="noopener noreferrer">+254 720 692 390</a></p>
                    <p>Open: Mon - Sat, 8:00 AM - 6:00 PM</p>
                    <div className="footer-links">
                        <h4>Book a Service</h4>
                        <ul>
                            <li><a href="https://wa.me/254720692390?text=I'd like to book a measurement service" target="_blank" rel="noopener noreferrer">Request Measurement</a></li>
                            <li><a href="https://wa.me/254720692390?text=I'd like to request a quote" target="_blank" rel="noopener noreferrer">Request a Quote</a></li>
                        </ul>
                    </div>
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
