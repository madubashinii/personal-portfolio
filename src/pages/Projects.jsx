import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import '../styles/Projects.css';
import project1Image from '../assets/project1.png';

const projectList = [
    {
        title: 'Project 1',
        description: 'A scalable web app built with React and Node.js.',
        tools: 'HTML, CSS, JS, PHP, MySQL, AJAX',
        codeLink: 'https://github.com/yourusername/project1',
        demoLink: 'https://yourliveprojectdemo.com',
        image: project1Image,
    },
    {
        title: 'Project 2',
        description: 'An e-commerce platform using Vue and Express.',
        tools: 'Vue.js, Express',
        codeLink: 'https://github.com/yourusername/project2',
        demoLink: 'https://yourliveprojectdemo.com',
        image: project1Image,
    },
    {
        title: 'Project 3',
        description: 'A dashboard application using Angular and MongoDB.',
        tools: 'Angular, MongoDB',
        codeLink: 'https://github.com/yourusername/project3',
        demoLink: 'https://yourliveprojectdemo.com',
        image: project1Image,
    },

];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="header">
                <h1>My Projects</h1>
            </div>

            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="short-description">{project.description}</p>
                            <p>Tools: {project.tools}</p>
                            <div className="project-links">
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="icon" /> Code
                                </a>
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                    <FaLink className="icon" /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
