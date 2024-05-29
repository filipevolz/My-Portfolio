import React from 'react';
import './hero.css'

function Hero() {

    const skillsIcons = [
        {
            img: "https://skillicons.dev/icons?i=html,css",
            id: 1,
        },
        {
            img: "https://skillicons.dev/icons?i=js,bootstrap",
            id: 2,
        },
        {
            img: "https://skillicons.dev/icons?i=react,vite",
            id: 3,
        },
        {
            img: "https://skillicons.dev/icons?i=git,github",
            id: 4,
        },
        {
            img: "https://skillicons.dev/icons?i=jquery,postgres",
            id: 5,
        },
        {
            img: "https://skillicons.dev/icons?i=nodejs,express",
            id: 6,
        },
    ];

    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1>Front-End React Developer</h1>
                        <p>Hi, I'm Filipe Volz. A passionate Front-end React Developer based in Florianópolis, Brazil. 📍</p>
                        <span><a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/filipe-volz"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a><a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/filipevolz"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a></span>
                    </div>
                    <div src="https://github.com/filipevolz.png" className="hero-img" />
                </div>
                <div className="skills">
                    <p>Tech Stack</p>
                    <div class="logos">
                        <ul>
                            {skillsIcons.map((icon) => (
                                <li key={icon.id}>
                                    <img src={icon.img} alt="skill-icon" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;