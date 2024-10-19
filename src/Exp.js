import React from "react";
import './exp.css';

function Exp(){
    return(
        <div>
            <div>
            <hr className="centered-line" />
            </div>

            <h2 className="subsection">EXPERIENCE</h2>

            <h2 className= "subsection1">PROJECTS</h2>
            <section className="projectsection">
                <div className="projects">
                    <h3 className="projname">KAGGLE NOTEBOOKS</h3>
                    <ul>
                        <li>Finetuned pretrained large language models and computer vision models on Kaggle text and image datasets for classification</li>
                        <li>You can view my work <a href="https://www.kaggle.com/christianmintaraga/code" target="_blank" rel="noopener noreferrer">here</a></li>
                    </ul>
                    <img src="Screenshot 2024-10-16 153007.png" alt="Kaggle Notebooks" className="projphoto"/>
                </div>

                <div className="projects">
                    <h3 className="projname">NARRATIVE NEST</h3>
                    <ul>
                        <li>An AI-based storyboard generator application, developed as a group project for Binus University's Software Engineering course</li>
                        <li>You can view Narrative Nest's GitHub Repository <a href="https://github.com/HanCreation/narrative-nest" target="_blank" rel="noopener noreferrer">here</a></li>
                    </ul>
                    <img src="NarNest demo.png" alt="Narrative Nest" className="projphoto"/>
                </div>

                <div className="projects">
                    <h3 className="projname">FINETUNED WHISPER-TINY FOR GERMAN SPEECH RECOGNITION</h3>
                    <ul>
                        <li>OpenAI's Whisper-Tiny ASR model, finetuned for German speech. Developed as a group project for Binus University's Speech Recognition course.</li>
                        <li>You can view Whisper-Tiny German's GitHub Repository <a href="https://github.com/HanCreation/Whisper-Tiny-German/blob/main/Finetuning%20Code.ipynb" target="_blank" rel="noopener noreferrer">here</a></li>
                        <li>You can also view Whisper-Tiny German on <a href="https://huggingface.co/LiquAId/whisper-tiny-german-HanNeurAI" target="_blank" rel="noopener noreferrer">Hugging Face</a></li>
                    </ul>
                    <img src="WTiny Ger.png" alt="Whisper Tiny German" className="projphoto"/>
                </div>
            </section>

            <h2 className= "subsection1">CERTIFICATIONS</h2>
            <section className="certsection">
                <div className="certification">
                    <div className="cert-text">
                        <h3 className="provider">HackerRank</h3>
                        <a className="certname" href="https://www.hackerrank.com/certificates/c7129e61dd81" target="_blank" rel="noopener noreferrer">SQL (Basic) Certificate</a>
                    </div>

                    <div className="cert-logo">
                        <img src="HackerRank_Icon-1000px.png" alt="HackerRank Logo" className="certimage"/>
                    </div>
                </div>
            </section>

            <div>
            <hr className="centered-line" />
            </div>
        </div>
    );
}
export default Exp;