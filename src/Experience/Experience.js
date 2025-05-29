import React from "react";
import './Experience.css'
import FadeInSection from '../Components/FadeInSection/FadeInSection'

const Experience = () =>{
    return (
        <div className="experience">
            <div className="experience_outside">
              <div className='experience_inside'>/ Experience {" "}</div>
                <div className="experience-line">
                  <hr />
                </div>
            </div>
            <div className="experience_parts">
            <FadeInSection>
              <div className="experience-item">
                <h3>Independent Freelance @ Helio - Discord Adventure Chatbot</h3>
                <p>Nov – Feb 2025 • Remote (United Kingdom)</p>
                <ul>
                  <li>Co-developed an interactive Discord bot with a global economy and virtual pet system, serving over 500,000 players.</li>
                  <li>Integrated a dynamic marketplace for trading items and a pet collection feature with 200+ unique pets, enhanced by a companion website: <a href="https://helio.lol" target="_blank" rel="noopener noreferrer">helio.lol</a>.</li>
                </ul>
              </div>
            </FadeInSection>

      <FadeInSection>
        <div className="experience-item">
          <h3>Frontend Developer @ FluxionSoft Co., Ltd</h3>
          <p>May – July 2024 • Seoul, South Korea</p>
          <ul>
            <li>Developed modules for diagnosing common technical issues, reducing resolution time.</li>
            <li>Contributed to a service chatbot aimed at troubleshooting and assisting customers with post-purchase support.</li>
            <li>Collaborated with senior engineers following best practices in coding standards, code reviews, source control, build processes, testing, and operations.</li>
          </ul>
        </div>
      </FadeInSection>
            </div> 
        </div>
    )
}

export default Experience; 