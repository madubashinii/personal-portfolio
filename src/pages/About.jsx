// import React from 'react';
// import '../styles/About.css';
// import project1Image from '../assets/project1.png'

// function About() {
//     return (
//         <div className="about-me-container" id="about">
//             <div className="profile">
//                 <div className="profile-picture">
//                     <img src={project1Image} alt="Nilakshi Madubashini" />
//                 </div>
//             </div>

//             <div className="about-content">
//                 <h1>About Me</h1>
//                 <p>Hi, I am Nilakshi Madubashini, a Software Engineering undergraduate at SLIIT pursuing a BSc(Hons) in Information Technology,
//                     specilaizing in Software Engineering.</p>

//                 <p>
//                     Throughout my academic journey, I’ve gained hands-on experience with modern web technologies, software engineering principles,
//                     and various programming languages. I’m always eager to explore innovative ideas and stay up-to-date with the latest technologies,
//                     with a strong desire to apply what I learn to real-world projects.
//                 </p>

//                 <p>
//                     I’m particularly interested in full-stack development,  where I can blend frontend creativity with backend logic to build complete, user-friendly solutions.
//                     I also enjoy working collaboratively with my peers, as I believe teamwork fosters growth and deeper learning.
//                 </p>

//                 <ul className="skills-list">
//                     <li>Full Stack Development</li>
//                     <li>Problem Solving</li>
//                     <li>Team Collaboration</li>
//                     <li>Design</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default About;


import React from 'react';
import '../styles/About.css';
import cvFile from '../assets/Nilakshi_Madubashini_CV.pdf';

function About() {
    return (
        <div className="about-me-container" id="about">
            <div className="about-content">
                <h1>About Me</h1>
                <p>
                    Hi, I am <strong>Nilakshi Madubashini</strong>, a Software Engineering undergraduate at SLIIT, pursuing a BSc(Hons) in Information Technology with a specialization in Software Engineering.
                </p>

                <p>
                    I have gained hands-on experience in modern web technologies, software development practices, and a range of programming languages throughout my academic journey. I enjoy solving problems, exploring new ideas, and building practical, real-world applications.
                </p>

                <p>
                    My passion lies in <strong>full-stack development</strong>, where I bring together frontend creativity and backend logic to create complete, user-centric solutions. I value collaboration and believe that working with others enhances both learning and innovation.
                </p>

                <p className="gpa">
                    🎓 <strong>Current GPA:</strong> 3.85 / 4.0
                </p>

                <h2 className="skills-heading">Core Strengths</h2>
                <ul className="skills-list">
                    <li>Full Stack Development</li>
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>UI/UX Design</li>
                </ul>

                <div className="cv-download">
                    <a href={cvFile} download className="download-btn">
                        📄 Download My CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;

