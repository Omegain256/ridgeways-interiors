import React from 'react'
import './LeadMagnet.css'

const LeadMagnet = () => {
    return (
        <section id="contact" className="lead-magnet section-padding">
            <div className="container">
                <div className="lead-magnet-card">
                    <div className="lead-magnet-content">
                        <h2 className="lead-title">Get Our Expert Measurement Guide</h2>
                        <p className="lead-text">
                            Learn how to measure your windows correctly before you call us.
                            Save time and ensure a perfect fit with our simple PDF guide.
                        </p>
                        <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit" className="btn btn-primary">Send Me the Guide</button>
                        </form>
                    </div>
                    <div className="lead-magnet-visual">
                        <div className="pdf-mockup">
                            <span className="pdf-icon">📄</span>
                            <span className="pdf-label">Measurement Guide.pdf</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeadMagnet
