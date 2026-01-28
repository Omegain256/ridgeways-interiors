import React from 'react'
import './Process.css'

const steps = [
    {
        step: "01",
        title: "Get in touch..",
        text: "Contact us via WhatsApp to start your journey. We'll help you find the perfect fabrics for your space."
    },
    {
        step: "02",
        title: "Expert Measurement",
        text: "We visit your home (in Nairobi, Kiambu Rd, etc.) to take precise measurements for a perfect fit."
    },
    {
        step: "03",
        title: "Professional Installation",
        text: "Our expert team installs your custom window treatments with precision and care."
    }
]

const Process = () => {
    return (
        <section id="process" className="process section-padding">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '6rem', padding: '0 5vw' }}>
                    <h2 className="section-title" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '5px', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>The Process</h2>
                    <p className="process-main-title" style={{ fontSize: '4rem', color: 'white', fontWeight: '300', lineHeight: '1.1' }}>From selection to perfection.</p>
                </div>

                <div className="process-grid">
                    {steps.map((item, idx) => (
                        <div key={idx} className="process-item">
                            <span className="process-number">{item.step}</span>
                            <h3 className="process-title">{item.title}</h3>
                            <p className="process-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
