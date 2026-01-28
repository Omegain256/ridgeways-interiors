import React from 'react'
import './Testimonials.css'

const reviews = [
    {
        text: "Ridgeways Interiors transformed our living room exactly how we wanted. The curtains are heavy, elegant, and perfectly stitched.",
        author: "Sarah Mbugua",
        location: "Runda"
    },
    {
        text: "The motorized rails are a game changer! Professional service from measurement to installation. Highly recommend!",
        author: "David Omondi",
        location: "Westlands"
    },
    {
        text: "Best curtain rods and fittings in Kenya. They paid attention to every detail in our bedroom makeover.",
        author: "Wanjiru Kamau",
        location: "Muthaiga"
    },
    {
        text: "Exceptional quality on the zebra blinds for our office. The team was punctual and very professional.",
        author: "John Mutua",
        location: "Kilimani"
    },
    {
        text: "I love the gypsum ceiling design they did. It adds such a luxury feel to our home. Great work!",
        author: "Grace Nyambura",
        location: "Karen"
    },
    {
        text: "Their attention to fabric quality is unmatched. My sheers look stunning in the morning light.",
        author: "Peter Kiprop",
        location: "Lavington"
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials section-padding" style={{ backgroundColor: '#FBFAF8' }}>
            <div className="container" style={{ padding: '0 5vw' }}>
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 className="section-title" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '5px', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Testimonials</h2>
                    <p style={{ fontSize: '2.5rem', fontWeight: '300', color: 'var(--color-charcoal)' }}>What our clients say.</p>
                </div>

                <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {reviews.map((review, idx) => (
                        <div key={idx} className="testimonial-card" style={{ padding: '3rem', border: '1px solid #eee' }}>
                            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem', color: '#555' }}>"{review.text}"</p>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-charcoal)' }}>{review.author}</strong>
                                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-gold)' }}>{review.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
