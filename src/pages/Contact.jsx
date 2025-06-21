import React, { useState } from 'react';
import '../styles/Contact.css';
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = e.target;

            // Add the action URL to the form
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Form data submitted successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Failed to submit data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (

        <div className="contact-page" id='contact'>
            <div className="header">
                <h1>Let's Connect</h1>
            </div>

            <div className="content">
                <div className="contact-info">


                    <h2>Get in Touch</h2>
                    <p className="contact-info-description">
                        I'm open to internship opportunities, collaborations, or just a friendly tech chat. Feel free to reach out!
                    </p>

                    <ul>
                        <li>
                            <span className="icon-circle">
                                <FiMail />
                            </span>
                            <a href="mailto:email@example.com">email@example.com</a>
                        </li>
                        <li>
                            <span className="icon-circle">
                                <FiPhone />
                            </span>
                            <a href="tel:+1234567890">+1 234 567 890</a>
                        </li>
                        <li>
                            <span className="icon-circle">
                                <FiMapPin />
                            </span>
                            <a
                                href="https://www.google.com/maps/place/123+Main+Street,+City,+Country"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                123 Main Street, City, Country
                            </a>
                        </li>

                    </ul>


                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="username@domain.com"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                placeholder="Your message..."
                                name='message'
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
