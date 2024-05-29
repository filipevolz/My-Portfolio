import React from 'react';
import './about.css'

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <img src="/My-Portfolio/images/programing-image.png" alt="Notebook" className="img-side-main" />

                <div className="text-side">
                    <h3>About me</h3>
                    <h4>Front-end Developer <br /> based in Florianópolis, Brazil 📍</h4>
                    <p>Hey, my name is Filipe, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users <br /><br /> My main stack currently is React/Vite in combination with Javascript.</p>
                </div>
            </div>
        </section>
    )
}

export default About;