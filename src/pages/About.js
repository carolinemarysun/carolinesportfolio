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
      src: 'images/about/zion.png',
      caption: {
        title: '',
        text: 'Zion National Park with my dog, Adabelle',
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
        I’m a second-generation Korean American, born in Hawaii and raised in
        Washington State. I graduated from the University of Washington in 2016 with a
        Bachelor of Science in Environmental Health and a minor in Chemistry.
    </p>

    <p>
        I started my career at Amazon in environmental health before transitioning
        into software engineering through Amazon Technical Academy. I later worked
        on the Amazon Care team in backend development for Amazon’s virtual
        healthcare service.
    </p>

    <p>
        After four years at Amazon, I decided to step away from tech and turn my
        passion for fitness and strength training into my career. I started by
        coaching group fitness classes before moving into one-on-one personal
        training. I’ve been lifting since 2014 and have competed in both
        powerlifting and bodybuilding.
    </p>

    <p>
        Today, I coach at Equinox Sports Club in Washington, D.C. My approach
        emphasizes proper technique, progressive strength development,
        individualized programming, nutrition guidance, and lifestyle coaching.
    </p>

    <p>
        Outside of coaching, I enjoy practicing self-care through mindfulness, 
        meditation, journaling, and reading, trying new recipes in the kitchen, 
        traveling abroad, and spending time with my miniature schnauzer.
    </p>
</div>
      </div>
      </header>
    </div>
  );
};

export default About;
