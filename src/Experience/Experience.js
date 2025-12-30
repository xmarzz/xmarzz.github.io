import React from "react";
import './Experience.css'
import FadeInSection from '../Components/FadeInSection/FadeInSection'

const Experience = () => {
    return (
        <div className="experience">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-subtitle">/ Experience</span>
                    <h2 className="section-title">Where I've Worked</h2>
                    <div className="section-line"></div>
                </div>
            </FadeInSection>

            <div className="timeline">
                <FadeInSection>
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="job-header">
                                <h3 className="job-title">Full Stack Software Developer <span className="company">@ Triomentor / The Digi Code</span></h3>
                                <div className="job-meta">
                                    <span className="job-range">Present</span>
                                    <span className="job-location">Bangalore, India</span>
                                </div>
                            </div>
                            <ul className="job-description">
                                <li>Developed the official website and CRM system for Bansal Classes Karnataka using Supabase.</li>
                                <li>Built Pick Your House, a property-listing platform, along with contributing to several other client projects.</li>
                                <li>Build scalable web platforms and internal tools.</li>
                                <li>Created the corporate site for The Digi Code.</li>
                            </ul>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="job-header">
                                <h3 className="job-title">Independent Freelance <span className="company">@ Helio</span></h3>
                                <div className="job-meta">
                                    <span className="job-range">Nov – Feb 2025</span>
                                    <span className="job-location">Remote (United Kingdom)</span>
                                </div>
                            </div>
                            <ul className="job-description">
                                <li>Co-developed an interactive Discord bot with a global economy and virtual pet system, serving over 500,000 players.</li>
                                <li>Integrated a dynamic marketplace for trading items and a pet collection feature with 200+ unique pets, enhanced by a companion website: <a href="https://helio.lol" target="_blank" rel="noopener noreferrer">helio.lol</a>.</li>
                            </ul>
                        </div>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="job-header">
                                <h3 className="job-title">Frontend Developer <span className="company">@ FluxionSoft Co., Ltd</span></h3>
                                <div className="job-meta">
                                    <span className="job-range">May – July 2024</span>
                                    <span className="job-location">Seoul, South Korea</span>
                                </div>
                            </div>
                            <ul className="job-description">
                                <li>Developed modules for diagnosing common technical issues, reducing resolution time.</li>
                                <li>Contributed to a service chatbot aimed at troubleshooting and assisting customers with post-purchase support.</li>
                                <li>Collaborated with senior engineers following best practices in coding standards, code reviews, source control, build processes, testing, and operations.</li>
                            </ul>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    )
}

export default Experience; 