// Experience.js
import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
    const [showKaggle, setShowKaggle] = useState(true);

    const toggleKaggle = () => setShowKaggle(!showKaggle);

    return (
        <div className="experience">
            <h2>EXPERIENCE</h2>
            
            <div className="projects">
                <button onClick={toggleKaggle}>
                    {showKaggle ? 'Hide Kaggle Notebooks' : 'Show Kaggle Notebooks'}
                </button>
                {showKaggle && (
                    <div className="project-details">
                        <h3>KAGGLE NOTEBOOKS</h3>
                        <p>Finetuned pretrained large language models...</p>
                        <a href="kaggle-profile-link" target="_blank" rel="noopener noreferrer">View my work</a>
                    </div>
                )}
                
                {/* Add similar sections for other projects */}
            </div>

            <div className="certifications">
                <h3>SQL (Basic) Certification</h3>
                <p>HackerRank</p>
            </div>
        </div>
    );
}

export default Experience;
