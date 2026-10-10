import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [fade, setFade] = useState(true);

  // Tracks whether the carousel is fully visible
  const [isInView, setIsInView] = useState(false);

  const carouselRef = useRef(null);

  const nextSlide = () => {
    setFade(false);

    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );

      setFade(true);
    }, 500);
  };

  const prevSlide = () => {
    setFade(false);

    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0
          ? images.length - 1
          : prevIndex - 1
      );

      setFade(true);
    }, 400);
  };

  const goToSlide = (index) => {
    setFade(false);

    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 400);
  };


  /* =========================
     CHECK IF CAROUSEL IS ON SCREEN
  ========================= */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.intersectionRatio >= 0.9);
      },
      {
        threshold: [0, 0.5, 0.9, 1],
      }
    );

    observer.observe(carousel);

    return () => {
      observer.disconnect();
    };
  }, []);


  /* =========================
     AUTO ADVANCE TIMER
  ========================= */

  useEffect(() => {
    // Do not start timer until carousel is visible
    if (!isInView || images.length <= 1) {
      return;
    }

    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);

    // Clears and restarts timer whenever:
    // - image changes
    // - user clicks next/previous
    // - carousel enters/leaves the screen
    return () => clearTimeout(timer);

  }, [activeIndex, isInView, images.length]);


  if (images.length === 0) {
    return <p>No images to display.</p>;
  }


  /* =========================
     STYLES
  ========================= */

  const styles = {
    carouselContainer: {
      width: '100%',
      margin: '0 auto',
      position: 'relative',
    },

    carouselItem: {
      position: 'relative',
      transition: 'opacity 0.5s ease',
      opacity: fade ? 1 : 0,
    },

    img: {
      width: '100%',
      height: '100%',
      transition: 'opacity 0.5s ease',
      borderRadius: '20px',
    },

    imgHovered: {
      filter: 'brightness(70%)',
    },

    caption: {
      display: 'none',
      position: 'absolute',
      bottom: '0',
      background: 'rgba(0, 0, 0, 0.5)',
      width: '100%',
      color: 'white',
      padding: '10px',
    },

    captionVisible: {
      display: 'block',
    },

    controlButton: {
      width: '40px',
      height: '40px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: '2px solid white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
    },

    controlIcon: {
      fontSize: '16px',
      color: 'lightgray',
      transition: 'color 0.3s',
      width: '20px',
      height: '20px',
    },

    controlIconHovered: {
      color: 'white',
    },

    prevButton: {
      left: '10px',
    },

    nextButton: {
      right: '10px',
    },

    indicators: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    },

    indicatorDot: {
      width: '30px',
      height: '5px',
      backgroundColor: 'var(--neutral-800)',
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },

    activeDot: {
      backgroundColor: 'white',
    },
  };


  return (
    <div
      ref={carouselRef}
      style={styles.carouselContainer}
    >
      <div className="carousel slide">

        {images.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.carouselItem,
              display:
                activeIndex === index
                  ? 'block'
                  : 'none',
            }}
          >
            <img
              src={image.src}
              alt={image.caption.title}
              loading="lazy"
              decoding="async"
              style={{
                ...styles.img,
                ...(hoveredIndex === index
                  ? styles.imgHovered
                  : {}),
              }}
              onMouseEnter={() =>
                setHoveredIndex(index)
              }
              onMouseLeave={() =>
                setHoveredIndex(null)
              }
            />

            <div
              style={
                hoveredIndex === index
                  ? {
                      ...styles.caption,
                      ...styles.captionVisible,
                    }
                  : styles.caption
              }
            >
              <h5>{image.caption.title}</h5>
              <p>{image.caption.text}</p>
            </div>
          </div>
        ))}


        {/* Previous Button */}

        <button
          className="carousel-control-prev"
          type="button"
          style={{
            ...styles.controlButton,
            ...styles.prevButton,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={prevSlide}
        >
          <span
            className="carousel-control-prev-icon"
            style={{
              ...styles.controlIcon,
              ...(isHovered
                ? styles.controlIconHovered
                : {}),
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </button>


        {/* Next Button */}

        <button
          className="carousel-control-next"
          type="button"
          style={{
            ...styles.controlButton,
            ...styles.nextButton,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={nextSlide}
        >
          <span
            className="carousel-control-next-icon"
            style={{
              ...styles.controlIcon,
              ...(isHovered
                ? styles.controlIconHovered
                : {}),
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </button>


        {/* Indicators */}

        <div style={styles.indicators}>

          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              style={
                activeIndex === index
                  ? {
                      ...styles.indicatorDot,
                      ...styles.activeDot,
                    }
                  : styles.indicatorDot
              }
            />
          ))}

        </div>

      </div>
    </div>
  );
};

export default Carousel;