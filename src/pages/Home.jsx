import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Home.css';
import project1Image from '../assets/project1.png';

function Home() {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div className="home" id="home">
            <div className={`content-container ${isVisible ? 'visible' : ''}`}>
                <div className="intro">
                    <div className="name-title">
                        <h1>Nilakshi Madubashini</h1>
                        <h2>Software Engineering Undergraduate</h2>
                    </div>

                    <p className="bio">
                        Hi, I am a Software Engineering undergraduate with a strong passion for full-stack web development.
                        This website serves as a space to share my ongoing journey, the projects I have worked on, and the knowledge I have acquired.
                    </p>

                    <div className="cta-buttons">
                        <a href="#projects" className="cta-primary">View Projects</a>
                        <a href="#contact" className="cta-secondary">Get in Touch</a>
                    </div>

                    <div className="social-icons">
                        <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <div className="home-image">
                    <div className="image-container">
                        <img src={project1Image} alt="Nilakshi Madubashini" />
                        <div className="image-backdrop"></div>
                        <div className="decoration-circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
