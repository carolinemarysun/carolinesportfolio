import React from 'react';
import '../styles/global/global.css';
import '../styles/page/contact.css';
import '../styles/global/layout.css';
import '../styles/global/typography.css';
import '../utils/global.js';
import PageMeta from '../components/PageMeta.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socialLinks = [
    {
        href: "https://dribbble.com/carolinemarysun",
        icon: faDribbble,
        text: "Dribbble"
    },
    {
        href: "https://www.linkedin.com/in/carolinemarysun",
        icon: faLinkedin,
        text: "LinkedIn"
    },
    {
        href: "https://www.instagram.com/badass.caroline",
        icon: faInstagram,
        text: "Instagram"
    },
    {
        href: "mailto:carolinemarysun@gmail.com",
        icon: faEnvelope,
        text: "Email"
    }
];

const Contact = () => {
    return (
        <div>
            <PageMeta title="Contact" />
            <div className="social-links-header">
                <h4 className="heading">Connect with me:</h4>
                <hr className="line" />
                <div className="social-links-container"> 
                    {socialLinks.map((link, index) => (
                        <div key={index} className="social-link-container">
                            <a 
                                href={link.href}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <FontAwesomeIcon icon={link.icon} size="2x" />
                                <span className="social-text">{link.text}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
