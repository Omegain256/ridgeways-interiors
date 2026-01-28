import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../assets/images/logo.jpg'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="/" className="logo">
                    <img src={logo} alt="Ridgeways Interiors" className="logo-img" />
                </a>

                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="https://wa.me/254720692390?text=I'd like to book a consultation." target="_blank" rel="noopener noreferrer" className="nav-cta">Booking</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
