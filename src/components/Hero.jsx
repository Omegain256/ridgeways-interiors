import React, { useState, useEffect } from 'react'
import './Hero.css'

// Using the provided full-width hero images
import img1 from '../assets/images/hero_1.jpg'
import img2 from '../assets/images/hero_2.jpg'
import img3 from '../assets/images/hero_3.jpg'

const Hero = () => {
    const images = [img1, img2, img3]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const whatsappNumber = "254720692390"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in a free quote for custom curtains and sheers in Nairobi.")}`

    return (
        <section className="hero">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`hero-slide ${idx === current ? 'active' : ''}`}
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})` }}
                />
            ))}

            <div className="hero-content centered">
                <h1 className="hero-title centered">
                    Welcome To <br />
                    <span className="brand-accent">Ridgeways Interiors</span>
                </h1>
                <p className="hero-subtitle centered">
                    Your Number one interior designer Shop for all your interior design needs.
                </p>
                <div className="hero-btns centered">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-main">CONTACT US</a>
                </div>
            </div>

            <div className="hero-dots">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${idx === current ? 'active' : ''}`}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Hero
