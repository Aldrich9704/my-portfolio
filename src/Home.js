import React from "react";
import './home.css';

function Home(){
    return(
        <div>
            <div>
            <hr className="centered-line" />
            </div>

            <section className="intro">
                <section className = "photo">
                    <h2 className="hello-im">HELLO, I’M</h2>
                    <img src="cropped_Pas_Foto_1_Juli_2024.png" alt="Profile" className="profile-pic" />
                    <h2 className = "myname"><span className="highlight_lb">CHRISTIAN</span> <span className="highlight">MINTARAGA</span></h2>
                </section>

                <section className = "intro-text">
                    <p className="description">
                    I’m an aspiring machine learning engineer based in Banten, Indonesia. While I’m still pursuing my degree in Computer Science with a specialization in Artificial Intelligence, I have worked on a variety of projects, from sentiment analysis models to image classification systems. My focus is on building intelligent algorithms that not only perform efficiently but also solve real-world problems in innovative ways.
                    </p>
                </section>
            </section>
            
        </div>
    );
}
export default Home;