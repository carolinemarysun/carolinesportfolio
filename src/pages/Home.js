import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/global/global.css';
import '../styles/global/layout.css';
import '../styles/global/typography.css';

import '../styles/page/home.css';
import '../styles/page/about.css';

import PageMeta from '../components/PageMeta';
import Button from '../components/Button.js';
import Testimonials from '../components/Testimonials.js';
import Carousel from '../components/Carousel.js';
import TrainWithMe from '../components/TrainWithMe';

import '../utils/global.js';


const images = [
    {
        src: '/images/home/carolinecoach.webp',
        caption: {
            title: '',
            text: 'Coach+ at Equinox Sports Club in DC',
        },
    },
    {
        src: '/images/about/deadlift.webp',
        caption: {
            title: '',
            text: 'Powerlifting meet',
        },
    },
    {
        src: '/images/about/squat.webp',
        caption: {
            title: '',
            text: 'My first state USAPL powerlifting meet',
        },
    },
    {
        src: '/images/about/isicoach-withclient.webp',
        caption: {
            title: '',
            text: 'Coaching group fitness',
        },
    },
];


const trainingProcess = [
    {
        number: '1',
        step: 'START WITH YOU',
        title: 'Assessment',
        description:
            'We’ll talk through your goals, training history, lifestyle, injuries, and current routine. A movement assessment helps us figure out where to start.',
    },
    {
        number: '2',
        step: 'CREATE YOUR PLAN',
        title: 'Build',
        description:
            'Your program is built around your goals, schedule, experience level, preferences, and what your body needs.',
    },
    {
        number: '3',
        step: 'GET STRONGER',
        title: 'Train',
        description:
            'We’ll focus on quality movement, proper technique, and progressive strength training so you can build confidence in what your body can do.',
    },
    {
        number: '4',
        step: 'SUPPORT THE WORK',
        title: 'Fuel',
        description:
            'Get personalized nutrition guidance and practical strategies to support your training, energy, and overall health.',
    },
    {
        number: '5',
        step: 'MAKE IT LAST',
        title: 'Progress',
        description:
            'We’ll track your progress, adjust as needed, and build sustainable habits so you continue to get stronger, inside and out.',
    },
];


const Home = () => {
    const location = useLocation();

    /*
     * Cross-page Train With Me navigation.
     *
     * Example:
     * /about -> /#train-with-me
     *
     * We repeatedly correct the position for a short period
     * in case Testimonials/images/fonts above the section
     * change the layout after Home mounts.
     */
    useEffect(() => {
        if (location.hash !== '#train-with-me') {
            return;
        }

        let cancelled = false;
        let timeoutIds = [];

        const alignTrainWithMe = (behavior = 'auto') => {
            if (cancelled) return;

            const element = document.getElementById('train-with-me');

            if (!element) return;

            const top =
                element.getBoundingClientRect().top +
                window.scrollY;

            window.scrollTo({
                top,
                left: 0,
                behavior,
            });
        };

        /*
         * Start Home from a known position so the scroll
         * position from About / Contact cannot carry over.
         */
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        });

        const firstFrame = requestAnimationFrame(() => {
            const secondFrame = requestAnimationFrame(() => {
                alignTrainWithMe('smooth');

                /*
                 * Correct any layout shifts that happen
                 * shortly after the initial scroll.
                 */
                [100, 250, 500, 800, 1200].forEach((delay) => {
                    const id = setTimeout(() => {
                        alignTrainWithMe('auto');
                    }, delay);

                    timeoutIds.push(id);
                });
            });

            timeoutIds.push(secondFrame);
        });

        return () => {
            cancelled = true;

            cancelAnimationFrame(firstFrame);

            timeoutIds.forEach((id) => {
                clearTimeout(id);
                cancelAnimationFrame(id);
            });
        };
    }, [location.hash]);


    /*
     * Hero button.
     * This only runs while already on Home.
     */
    const scrollToTraining = (event) => {
        event.preventDefault();

        const element = document.getElementById('train-with-me');

        if (!element) return;

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };


    return (
        <div>

            <PageMeta title="Caroline Sun" />


            {/* HERO */}

            <header
                className="hero fade-up"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/home/hero-powerlifting.webp)`,
                }}
            >
                <div className="hero-overlay"></div>

                <div className="hero-content">

                    <h1>
                        Strength by Caroline.
                    </h1>

                    <p className="p1">
                        Personalized strength training and lifestyle coaching
                        to help you build{' '}
                        <span className="highlight-text">
                            <strong>
                                strength and confidence
                            </strong>
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


            {/* ARROW */}

            <section id="arrow">
                <img
                    src="/images/home/down-arrow.svg"
                    alt="Down Arrow"
                    className="down-arrow"
                />
            </section>


            {/* ABOUT ME */}

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
                            In 2022, I left my career in software engineering at
                            Amazon to turn my deep passion for fitness and strength
                            training into my work.
                        </p>

                        <p>
                            I’ve been lifting since 2014 and have competed in both
                            powerlifting and bodybuilding. Strength training helped
                            me build confidence, resilience, and a stronger
                            relationship with myself. Helping others discover what
                            strength training can do for their confidence, health,
                            and quality of life is a big part of why I coach today.
                        </p>

                        <p>
                            Today, I coach at Equinox Sports Club in Washington,
                            D.C., working with clients across a wide range of ages,
                            backgrounds, and experience levels. My approach to
                            training emphasizes proper technique and form,
                            progressive strength development, and individualized
                            programming and lifestyle coaching tailored to you.
                        </p>

                        <Button href="/about">
                            Learn More
                        </Button>

                    </div>

                </div>
            </section>


            {/* TRAINING PROCESS */}

            <section
                id="training-process"
                className="fade-in-section"
            >
                <div className="training-process-container">

                    <p className="section-label">
                        TRAINING PROCESS
                    </p>

                    <div className="training-process-header">
                        <h2>
                            What training together looks like
                        </h2>
                    </div>

                    <div className="process-timeline">

                        {trainingProcess.map((item) => (
                            <div
                                className="process-row"
                                key={item.number}
                            >

                                <div className="process-number-col">
                                    <span className="timeline-number">
                                        {item.number}
                                    </span>
                                </div>

                                <div className="process-center">
                                    <span className="process-dot"></span>
                                </div>

                                <div className="process-card">

                                    <span className="process-step">
                                        {item.step}
                                    </span>

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* TESTIMONIALS */}

            <section
                id="testimonials"
                className="fade-in-section"
            >
                <div className="testimonials-container">

                    <p className="section-label">
                        WHAT CLIENTS ARE SAYING
                    </p>

                    <h2>
                        Testimonials
                    </h2>

                    <Testimonials />

                </div>
            </section>


            {/* TRAIN WITH ME

                IMPORTANT:
                TrainWithMe.js owns the ONLY
                id="train-with-me"
            */}

            <TrainWithMe />


        </div>
    );
};

export default Home;