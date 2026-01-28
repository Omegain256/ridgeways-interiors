import React, { useState } from 'react'
import './Gallery.css'

// New high-quality room assets
import livingRoomImg from '../assets/images/living_room.jpg'
import bedroomImg from '../assets/images/bedroom.jpg'
import officeImg from '../assets/images/office.jpg'

const items = [
    { id: 1, category: 'Living Room', image: livingRoomImg, title: 'Curtains and sheers in Nairobi' },
    { id: 2, category: 'Bedroom', image: bedroomImg, title: 'Custom window blinds Kenya' },
    { id: 3, category: 'Office', image: officeImg, title: 'Motorized curtain rails Nairobi' },
]

const Gallery = () => {
    const [filter, setFilter] = useState('All')
    const categories = ['All', 'Living Room', 'Bedroom', 'Office']

    const filteredItems = filter === 'All'
        ? items
        : items.filter(item => item.category === filter)

    return (
        <section id="gallery" className="gallery section-padding">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '4rem', paddingLeft: '5vw' }}>
                    <h2 className="section-title">The Gallery</h2>
                    <p className="section-subtitle">Premium transformations for every space.</p>
                </div>

                <div className="gallery-filters" style={{ paddingLeft: '5vw' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(1, 1fr)', gap: '0' }}>
                    {filteredItems.map(item => (
                        <div key={item.id} className="gallery-item" style={{ height: '100vh', position: 'relative' }}>
                            <img src={item.image} alt={item.category} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="gallery-overlay" style={{ opacity: 1, background: 'rgba(0,0,0,0.2)', justifyContent: 'flex-start', alignItems: 'flex-end', padding: '5vw' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-gold)' }}>{item.category}</span>
                                    <h3 style={{ fontSize: '3rem', color: 'white', fontWeight: '300', marginTop: '1rem' }}>{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
