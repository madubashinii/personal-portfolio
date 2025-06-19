import React from 'react';
import '../styles/About.css';
import project1Image from '../assets/project1.png'

function About() {
    return (
        <div className="about-me-container" id="about">
            <div className="profile">
                <div className="profile-picture">
                    <img src={project1Image} alt="Nilakshi Madubashini" />
                </div>
            </div>

            <div className="about-content">
                <h1>About Me</h1>
                <p>Hi, I am Nilakshi Madubashini, a Software Engineering undergraduate at SLIIT pursuing a BSc(Hons) in Information Technology,
                    specilaizing in Software Engineering.</p>

                <p>
                    Throughout my academic journey, I’ve gained hands-on experience with modern web technologies, software engineering principles,
                    and various programming languages. I’m always eager to explore innovative ideas and stay up-to-date with the latest technologies,
                    with a strong desire to apply what I learn to real-world projects.
                </p>

                <p>
                    I’m particularly interested in full-stack development,  where I can blend frontend creativity with backend logic to build complete, user-friendly solutions.
                    I also enjoy working collaboratively with my peers, as I believe teamwork fosters growth and deeper learning.
                </p>

                <ul className="skills-list">
                    <li>Full Stack Development</li>
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>Design</li>
                </ul>
            </div>
        </div>
    );
}

export default About;