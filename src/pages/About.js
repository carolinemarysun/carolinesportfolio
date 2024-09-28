import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global/global.css';
import '../styles/global/layout.css';
import '../styles/global/typography.css';
import '../styles/page/about.css';
import PageMeta from '../components/PageMeta';
import '../utils/global.js';
import Carousel from '../components/Carousel.js';

const About = () => {
  const images = [
    {
      src: 'images/about/mtfuji.png',
      caption: {
        title: '',
        text: 'Mount Fuji, Japan',
      },
    },
    {
      src: 'images/about/coach-headshot.png',
      caption: {
        title: '',
        text: 'Performance Coach at ISI Elite Training',
      },
    },
    {
      src: 'images/about/deadlift.png',
      caption: {
        title: '',
        text: 'My first powerlifting meet',
      },
    },
    {
      src: 'images/about/squat.png',
      caption: {
        title: '',
        text: 'My first state USAPL powerlifting meet',
      },
    },
  ];

  return (
    <div>
      <PageMeta title="About" />
      <header className="fade-up">
      <div className="container">
        <div className="carouselContainer">
          <Carousel images={images} />
        </div>
        <div className="textContainer">
          <h2>👋 I'm Caroline!</h2>
          <hr className="line" />
          <p>
          <p>I am a second generation Korean American born in Hawaii and raised in Washington State.</p>
          <p>I graduated from the University of Washington with a Bachelor of Science in Environmental Health 
          and a Minor in Chemistry. My first job was at Amazon as a Environmental Health Specialist. I then attended 
          a year long program within Amazon called Amazon Technical Academy to become a Software Development Engineer. 
          I worked as a SDE for the Amazon Care team, Amazon’s virtual healthcare service, for backend development. 
          After my 4 years at Amazon, I decided to pivot my career into front end development and UI/UX design. 
          I am currently a UX Designer at DocAI, a healthcare AI start up.</p>
          <p>Outside of work I enjoy powerlifting, training Brazilian jiu jitsu, teaching fitness classes, and personal training. 
          I also love traveling abroad and spending time with my miniature schnauzer.</p>
          </p>
        </div>
      </div>
      </header>
    </div>
  );
};

export default About;
