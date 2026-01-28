import React from 'react'
import './FeaturedProjects.css'

const projects = [
    {
        name: "Lynn Ngugi's Studio",
        location: "Nairobi",
        description: "Elegant sheers and motorized tracks for a professional studio backdrop.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Luxury Residence",
        location: "Ridgeways",
        description: "Premium puddled curtains for a master bedroom makeover.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Corporate Office",
        location: "Westlands",
        description: "Sleek zebra blinds for a modern workspace aesthetic.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    }
]

const FeaturedProjects = () => {
    return (
        <section className="featured section-padding">
            <div className="container">
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-item">
                            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                                <div className="project-overlay">
                                    <p>{project.location}</p>
                                    <h4>{project.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="trust-bar section-padding">
                    <p className="trust-text">As Featured On</p>
                    <div className="trust-logos">
                        <span className="trust-logo">LYNN NGUGI</span>
                        <span className="trust-logo">KBC NEWS</span>
                        <span className="trust-logo">NTV KENYA</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects
