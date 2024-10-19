// About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h2>ABOUT ME</h2>
            <div className="about-content">
                <img src="path/to/about-image.png" alt="About" />
                <p>
                    Born in 2004 in Banten, Indonesia. I see machine learning as the key to unlocking...
                </p>
            </div>

            <h3>MY EDUCATIONAL BACKGROUND</h3>
            <div className="education">
                <div className="school">
                    <h4>BINUS UNIVERSITY</h4>
                    <p>Computer Science | AI</p>
                    <p>GPA: 3.66 / 4.00</p>
                </div>
                <div className="school">
                    <h4>SMA SANTA LAURENSIA</h4>
                    <p>Mathematics and Science Major</p>
                    <p>GPA: 3.70 / 4.00</p>
                </div>
            </div>

            <h3>MY SKILLS INCLUDE</h3>
            <div className="skills">
                <div className="skills-block">
                    <h4>TECHNICAL SKILLS</h4>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>SQL</li>
                        {/* Add more skills */}
                    </ul>
                </div>
                <div className="skills-block">
                    <h4>SOFT SKILLS</h4>
                    <ul>
                        <li>Analytical Thinker</li>
                        {/* Add more soft skills */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
