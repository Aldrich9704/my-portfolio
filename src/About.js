import React from "react";
import "./about.css"

function About(){
    return(
        <div className="about">
            <div>
            <hr className="centered-line" />
            </div>

            <h2 className="subsection">ABOUT ME</h2>
            <div className="about-content">
                <p className="abouttext">
                Born in 2004 in Banten, Indonesia. <br/>
                I see machine learning as the key to unlocking a future with virtually endless potential.<br/>
                With a mission to explore the depths of AI, I am driven to provide innovative solutions to real-world problems through AI technology.<br/>
                My passion lies in pushing AI past its boundaries, and creating intelligent systems that have a lasting impact on the future<br/>
                Through constant learning, experimentation, and collaboration, I strive to evolve the way machines understand and interact with the world.<br/>
                </p>
            </div>

            <div>
            <hr className="centered-line" />
            </div>

            <h3 className="subsection">MY EDUCATIONAL BACKGROUND</h3>
            
            <section className="edhist">
                <section className="edback">   
                    <p className="edback-info">
                        <h3 className="schoolname">BINUS UNIVERSITY</h3>
                        Computer Science | Artificial Intelligence <br/>
                        2022-2026 <br/>
                        Current GPA: 3.66 / 4.00 (As of Semester 5) <br/>
                        <br/>
                        Currently pursuing a Bachelor’s degree in Computer Science, with a specialization in Artificial Intelligence. Involved in several AI-related projects. 
                        <ul>
                            <li>Member of Bina Nusantara Computer Club</li>
                        </ul>
                    </p>
                
                    <img className = "schoollogo" src="Logo-Binus-University-Universitas-Bina-Nusantara-Original-PNG.png" alt="School Logo"/>
                </section>

                <section className="edback">
                    <p className="edback-info">
                        <h3 className="schoolname">SANTA LAURENSIA HIGH SCHOOL</h3>
                        Mathematics and Science (MIPA) Major <br/>
                        2019-2022 <br/>
                        GPA: 3.70 / 4.00<br/>
                        <br/>
                        Graduated with a major of Mathematics and Science (MIPA).
                        <ul>
                            <li>Participated in advanced Mathematics and Physics classes</li>
                            <li>Participated in several academic competitions</li>
                        </ul>
                    </p>
               
                    <img className = "schoollogo" src="st laurensia.png" alt="School Logo"/>
                </section>
            </section>

            

            <div>
            <hr className="centered-line" />
            </div>

            <h3 className="subsection">MY SKILLS INCLUDE</h3>
            <div className="skills">
                <div className="skills-block">
                    <h4 className = "skillstitle">TECHNICAL SKILLS</h4>

                    <li>Computer Programming</li>
                    <li>Machine Learning</li>
                    <li>Data Science</li>

                    <li>
                        Programming Languages
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>SQL</li>
                        </ul>
                    </li>

                    <li>
                        Python Libraries
                        <ul>
                            <li>Numpy</li>
                            <li>Pandas</li>
                            <li>Matplotlib</li>
                            <li>Seaborn</li>
                            <li>TensorFlow</li>
                            <li>PyTorch</li>
                            <li>Scikit-Learn</li>
                            <li>Apache Spark</li>
                        </ul>  
                    </li>

                    <li>
                        Microsoft Office
                    </li>
                </div>
                <div className="skills-block">
                    <h4 className = "skillstitle">SOFT SKILLS</h4>
                    <ul>
                        <li>Analytical Thinker</li>
                        <li>Effective Communicator</li>
                        <li>Adaptable</li>
                        <li>Collaborative</li>
                        <li>Strong Aptitude for Learning</li>
                    </ul>
                </div>
                <div className="skills-block">
                    <h4 className = "skillstitle">ATTITUDE</h4>
                    <ul>
                        <li>Positive Thinker</li>
                        <li>Growth Mindset</li>
                        <li>Integrity</li>
                        <li>Diligence</li>
                        <li>Persistence in the Face of Hardship</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default About;