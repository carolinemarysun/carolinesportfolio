import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/global/global.css';
import '../styles/global/layout.css';
import '../styles/global/typography.css';

import '../styles/page/home.css';
import '../styles/page/about.css';

import PageMeta from '../components/PageMeta';
import Button from '../components/Button.js';
import Testimonials from '../components/Testimonials.js';
import CaseStudy from '../components/CaseStudy.js';
import Carousel from '../components/Carousel.js';
import TrainWithMe from '../components/TrainWithMe';

import '../utils/global.js';

const images = [
    {
        src: '/images/home/me2.png',
        caption: {
            title: '',
            text: 'Coach+ at Equinox Sports Club in DC',
        },
    },
    {
        src: '/images/about/deadlift.png',
        caption: {
            title: '',
            text: 'Powerlifting meet',
        },
    },
    {
        src: '/images/about/squat.png',
        caption: {
            title: '',
            text: 'My first state USAPL powerlifting meet',
        },
    },
        {
        src: '/images/about/isicoach-withclient.png',
        caption: {
            title: '',
            text: 'My first state USAPL powerlifting meet',
        },
    },
];


const trainingProcess = [
    {
        number: "1",
        step: "START WITH YOU",
        title: "Assessment",
        description:
            "We’ll talk through your goals, training history, lifestyle, injuries, and current routine. A movement assessment helps us figure out where to start."
    },
    {
        number: "2",
        step: "CREATE YOUR PLAN",
        title: "Build",
        description:
            "Your program is built around your goals, schedule, experience level, preferences, and what your body needs."
    },
    {
        number: "3",
        step: "GET STRONGER",
        title: "Train",
        description:
            "We’ll focus on quality movement, proper technique, and progressive strength training so you can build confidence in what your body can do."
    },
    {
        number: "4",
        step: "SUPPORT THE WORK",
        title: "Fuel",
        description:
            "Get personalized nutrition guidance and practical strategies to support your training, energy, and overall health."
    },
    {
        number: "5",
        step: "MAKE IT LAST",
        title: "Progress",
        description:
            "We’ll track your progress, adjust as needed, and build sustainable habits so you continue to get stronger, inside and out."
    }
];

const testimonials = [
    {
        name: "Sophia M.",
        image: "/images/testimonials/sophia.jpg",
        quote:
            "I’m stronger, more confident, and actually enjoy going to the gym now. Caroline makes training feel approachable and fun!"
    },
    {
        name: "Emma R.",
        image: "/images/testimonials/emma.jpg",
        quote:
            "I’ve lost body fat, built muscle, and feel healthier than ever. Caroline’s coaching is thoughtful, personalized, and truly effective."
    },
    {
        name: "Jessica T.",
        image: "/images/testimonials/jessica.jpg",
        quote:
            "Caroline’s knowledge and support have been incredible. She meets you where you are and helps you become the strongest version of yourself."
    }
];

const accordionItems = [
    {
        header: 'UI/UX Design at DocAI',
        content: (
            <div className="row">
                <CaseStudy
                    title="Design System"
                    imageSrc="/images/home/design-system.png"
                    link="https://www.figma.com/design/rdbsoCUUbYwMDxuIJiunmo/DocAI-Design-System?node-id=7701-7103&t=YWAgZTrcaJifAMy8-1"
                />

                <CaseStudy
                    title="Landing Page"
                    imageSrc="/images/home/landing-page.png"
                    link="https://dribbble.com/shots/24919647-Healthcare-Landing-Page"
                />

                <CaseStudy
                    title="Health Screening"
                    imageSrc="/images/home/health-screening.png"
                    link="https://www.figma.com/design/kITUKcOURolIwqzllHptoY/DocAI---Health-Screening?node-id=3-16&t=pRFhLVqdIjs23Mtb-1"
                />

                <CaseStudy
                    title="Schedule Appointment"
                    imageSrc="/images/home/schedule-appointment.png"
                    link="https://www.figma.com/design/NlIuBmzznGN9PqXXsMJGmc/DocAI---Schedule-Appointment?node-id=3-16&t=LCzFc1ek5rKDiJRh-1"
                />

                <CaseStudy
                    title="Settings"
                    imageSrc="/images/home/settings.png"
                    link="https://dribbble.com/shots/24930980-Healthcare-Settings-Page"
                />
            </div>
        ),
    },

    {
        header: 'Backend Software Development at Amazon',
        content: (
            <>
                <h4>Scheduling Project</h4>

                <p>
                    I worked on new features for the Amazon Care app for patients
                    to schedule, cancel, and reschedule appointments with providers,
                    as well as receive appointment reminders.
                </p>

                <p>
                    Previously, patients were only able to meet with providers
                    on-demand. Multiple APIs were implemented and tested through
                    unit testing and calls to the APIs in alpha, beta, and gamma
                    stages before ultimately being released to production.
                </p>

                <h4>Care Teams Project</h4>

                <p>
                    Being assigned to a care team was previously a manual process
                    completed by clinicians. I worked on a feature that
                    automatically assigned new patients to a care team during
                    initial enrollment.
                </p>

                <h4>Consultants Project</h4>

                <p>
                    We maintained the database of clinicians in Amazon Care using
                    DynamoDB. For new features, I worked on changes to existing
                    APIs to support additional clinician attributes such as gender,
                    profile icons, and biographies.
                </p>
            </>
        ),
    },

    {
        header: 'My Portfolio Website',
        content: (
            <p>
                I designed and coded this website using React, JavaScript, HTML,
                and CSS. See my GitHub repo{' '}
                <a
                    href="https://github.com/carolinemarysun/carolinesportfolio"
                    className="underline-text"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
                .
            </p>
        ),
    },
];


const Home = () => {
        const scrollToTraining = (event) => {
        event.preventDefault();

        document.getElementById('train-with-me')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div>
            <PageMeta title="Caroline Sun" />

<header
    className="hero fade-up"
    style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/home/hero-powerlifting.png)`
    }}
>
    <div className="hero-overlay"></div>

    <div className="hero-content">
        <h1>Strength by Caroline.</h1>

        <p className="p1">
            Personalized strength training and lifestyle coaching to help you build <span className="highlight-text"> strength and confidence
            </span>{' '}
            from within.
        </p>

        <p className="p1">
            Based in Washington, D.C.
        </p>
<a
    href="#train-with-me"
    className="site-button"
    onClick={scrollToTraining}
>
    Train With Me
</a>
    </div>
</header>


            {/* Arrow Section */}
            <section id="arrow">
                <img
                    src="/images/home/down-arrow.svg"
                    alt="Down Arrow"
                    className="down-arrow"
                />
            </section>


            {/* About Me Section */}
            <section
                id="about-me-home"
                className="fade-in-section"
            >
                <div className="container">

                    <div className="carouselContainer">
                        <Carousel images={images} />
                    </div>

                    <div className="textContainer">
                        <p className="section-label">
                            ABOUT ME
                        </p>

                        <h2>
                            Fitness changed my life. Now I get to pay it forward.
                        </h2>

                        <hr className="line" />

                        <p>
                            In 2022, I left my career in software engineering at Amazon to
                            turn my deep passion for fitness and strength training into my
                            work.
                        </p>

                        <p>
                            I’ve been lifting since 2014 and have competed in both
                            powerlifting and bodybuilding. Strength training helped
                            me build confidence, resilience, and a stronger relationship with myself. 
                            Helping others discover what strength training can do for their confidence, 
                            health, and quality of life is a big part of why I coach today.
                        </p>

                        <p>
                            Today, I coach at Equinox Sports Club in Washington, D.C., working with clients 
                            across a wide range of ages, backgrounds, and experience levels. My approach to 
                            training emphasizes proper technique and form, progressive strength development, 
                            and individualized programming and lifestyle coaching tailored to you.
                        </p>
                            <Button href="/about">
                                Learn More
                            </Button>
                    </div>

                </div>
            </section>


            {/* Training Process Section */}
<section id="training-process" className="fade-in-section">
    <div className="training-process-container">
        <p className="section-label">TRAINING PROCESS</p>

        <div className="training-process-header">
            <h2>What training together looks like</h2>
        </div>

        <div className="process-timeline">
            {trainingProcess.map((item) => (
                <div className="process-row" key={item.number}>
                    <div className="process-number-col">
                        <span className="timeline-number">{item.number}</span>
                    </div>

                    <div className="process-center">
                        <span className="process-dot"></span>
                    </div>

                    <div className="process-card">
                        <span className="process-step">{item.step}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

            {/* Testimonals Section */}
<section id="testimonials" className="fade-in-section">
    <div className="testimonials-container">
        <p className="section-label">WHAT CLIENTS ARE SAYING</p>
        <h2>Testimonials</h2>

        <Testimonials />
    </div>
</section>

            {/* Testimonals Section */}
<section id="train-with-me" className="fade-in-section">
    <div className="train-with-me-container">
        <TrainWithMe />
    </div>
</section>


            {/* My Work Section

            <section
                id="my-work"
                className="fade-in-section"
            >
                <p className="p1">
                    MY WORK
                </p>

                <Accordion items={accordionItems} />
            </section>

            */}
        </div>
    );
};

export default Home;