import React from 'react'
import './AboutUs.css'
import aboutImg from '../assets/images/about_v2.jpg'

const AboutUs = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5vw', alignItems: 'center' }}>
                    <div className="about-image" style={{ position: 'relative' }}>
                        <img src={aboutImg} alt="Ridgeways Interiors Craftsmanship" style={{ width: '100%', borderRadius: '4px', boxShadow: 'var(--shadow-premium)' }} />
                        <div className="experience-badge" style={{ position: 'absolute', bottom: '-20px', right: '20px', background: 'var(--color-gold)', color: 'white', padding: '2rem', borderRadius: '4px', textAlign: 'center' }}>
                            <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '700', lineHeight: '1' }}>10+</span>
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Years Experience</span>
                        </div>
                    </div>

                    <div className="about-content" style={{ padding: '0 2rem' }}>
                        <h2 className="section-title" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '5px', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>About Us</h2>
                        <p className="about-main-title" style={{ fontSize: '3.5rem', color: 'var(--color-charcoal)', fontWeight: '300', lineHeight: '1.1', marginBottom: '2.5rem' }}>
                            Elegance in every <span style={{ fontStyle: 'italic' }}>detail.</span>
                        </p>
                        <p className="about-text" style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: '1.8' }}>
                            At Ridgeways Interiors, we believe that your windows are the soul of your home. For over a decade, we have been Nairobi's premier destination for bespoke curtains, sheers, and window treatments that blend traditional craftsmanship with modern innovation.
                        </p>
                        <p className="about-text" style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem', lineHeight: '1.8' }}>
                            Our team of expert designers and installers work closely with you to transform your spaces into luxurious sanctuaries. From hand-selecting premium fabrics to precision installation of motorized rails, we ensure every stitch is a statement of excellence.
                        </p>
                        <a href="https://wa.me/254720692390?text=I'd like to learn more about your services." target="_blank" rel="noopener noreferrer" className="btn btn-primary">Our Expertise</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
