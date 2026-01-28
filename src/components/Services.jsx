import React from 'react'
import './Services.css'

const services = [
    {
        title: "Curtains and sheers in Nairobi",
        items: ["Bespoke Tailoring", "Premium Fabrics", "Motorized Rails"],
        icon: "🪟"
    },
    {
        title: "Custom window blinds Kenya",
        items: ["Zebra Blinds", "Roller Blinds", "Blackout Solutions"],
        icon: "🪜"
    },
    {
        title: "Best curtain rods and fittings in Kenya",
        items: ["Powder-coated Rods", "Gold & Brass Finishes", "Expert Installation"],
        icon: "🦯"
    },
    {
        title: "Gypsum ceiling designs for living room Kenya",
        items: ["Modern Lighting", "Custom Molding", "Professional Finish"],
        icon: "🏠"
    }
]

const Services = () => {
    return (
        <section id="services" className="services section-padding">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '6rem', padding: '0 5vw' }}>
                    <h2 className="section-title" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '5px', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Our Specialized Services</h2>
                    <p className="section-subtitle" style={{ fontSize: '4rem', color: 'var(--color-charcoal)', fontWeight: '300', lineHeight: '1.1', maxWidth: '800px' }}>
                        Premium solutions for every corner of your home.
                    </p>
                </div>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5vw' }}>
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card" style={{ borderBottom: '1px solid #eee', paddingBottom: '3rem' }}>
                            <div className="service-icon" style={{ fontSize: '2rem', marginBottom: '2rem', filter: 'grayscale(1)' }}>{service.icon}</div>
                            <h3 className="service-card-title" style={{ fontSize: '1.8rem', fontWeight: '300', marginBottom: '2rem' }}>{service.title}</h3>
                            <ul className="service-list">
                                {service.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <a href={`https://wa.me/254720692390?text=Hi! I am interested in ${service.title}.`} target="_blank" rel="noopener noreferrer" className="service-book-link" style={{ display: 'inline-block', marginTop: '2rem', color: '#FF5A5F', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
                                Book Consultation →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
