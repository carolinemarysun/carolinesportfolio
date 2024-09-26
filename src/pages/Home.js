import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global/global.css';
import '../styles/page/home.css';
import '../styles/global/layout.css';
import '../styles/global/typography.css';
import PageMeta from '../components/PageMeta';
import '../utils/global.js';
import Accordion from '../components/Accordion.js';
import CaseStudy from '../components/CaseStudy.js';

const accordionItems = [
    {
        header: "UI/UX Design at DocAI",
        content: (
            <div className="row">
                <CaseStudy 
                    title="Design System" 
                    imageSrc="images/home/design-system.png" 
                    link="https://www.figma.com/design/rdbsoCUUbYwMDxuIJiunmo/DocAI-Design-System?node-id=7701-7103&t=YWAgZTrcaJifAMy8-1"
                />
                <CaseStudy 
                    title="Landing Page" 
                    imageSrc="images/home/landing-page.png" 
                    link="https://dribbble.com/shots/24919647-Healthcare-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=
                    carolinemarysun&utm_content=Healthcare%20Landing%20Page&utm"
                />
                <CaseStudy 
                    title="Health Screening" 
                    imageSrc="images/home/health-screening.png" 
                    link="https://www.figma.com/design/kITUKcOURolIwqzllHptoY/DocAI---Health-Screening?node-id=3-16&t=pRFhLVqdIjs23Mtb-1"
                />
                <CaseStudy 
                    title="Schedule Appointment" 
                    imageSrc="images/home/schedule-appointment.png" 
                    link="https://www.figma.com/design/NlIuBmzznGN9PqXXsMJGmc/DocAI---Schedule-Appointment?node-id=3-16&t=LCzFc1ek5rKDiJRh-1"
                />
                <CaseStudy 
                    title="Settings" 
                    imageSrc="images/home/settings.png" 
                    link="https://dribbble.com/shots/24930980-Healthcare-Settings-Page?utm_source=Clipboard_Shot&utm_campaign=carolinemarysun
                    &utm_content=Healthcare%20Settings%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=carolinemarysun
                    &utm_content=Healthcare%20Settings%20Page&utm_medium=Social_Share"
                />
            </div>
        ),
    },
    {
        header: "Backend Software Development at Amazon",
        content: (
            <>
                <h4>Scheduling Project</h4>
                <p>I worked on new features for the Amazon Care app for patients to be able to schedule, cancel, and reschedule an 
                    appointment with a provider, as well as get appointment reminders. Previously, patients were only able to meet 
                    with a provider on-demand. Multiple APIs were implemented and extensively tested through unit testing and calls 
                    to the APIs in alpha, beta, and gamma stages, and ultimately released to prod.</p>
                <h4>Care Teams Project</h4>
                <p>Being assigned to a care team was previously a manually process done by the clinicians. I worked on a new feature 
                    for new patients to automatically be assigned a care team during initial enrollment.</p>
                <h4>Consultants Project</h4>
                <p>For clinicians we maintained the database of all the clinicians in Amazon Care in DynamoDB. For new features being rolled out we needed 
                    to make changes to the existing APIs to add more attributes to the clinicians such as gender, profile icons, and biographies.</p>
            </>
        ),
    },
    {
        header: "My Portfolio Website",
        content: (
            <p>
            I designed and coded this website using React, Javascript, HTML, and CSS. See my GitHub repo{" "}
            <a href="https://github.com/carolinemarysun/carolinesportfolio" 
            className="underline-text" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        ),
    },
];

const Home = () => {
    return (
        <div>
            <PageMeta title="Caroline Sun" />
            {/* Hero Section */}
            <header className="fade-up">
                <h1>Caroline Sun.</h1>
                <p className="p1">UX Designer and Software Engineer <span className="highlight-text">by day</span>,<br />
                    Powerlifter, Personal Trainer, and Group Fitness Coach <span className="highlight-text">by night</span>.</p>
                <p className="p1">Based in Baltimore, Maryland.</p>
            </header>

            {/* Arrow Section */}
            <section id="arrow">
                <img src="/images/home/down-arrow.svg" alt="Down Arrow" className="down-arrow" />
            </section>

            {/* My Work Section */}
            <section id="my-work" className="fade-in-section">
                <p className="p1">MY WORK</p>
                {/* Accordion */}
                <Accordion items={accordionItems} />
            </section>

            {/* Scripts */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.3.0/mdb.min.js"></script>
        </div>
    );
};

export default Home;
