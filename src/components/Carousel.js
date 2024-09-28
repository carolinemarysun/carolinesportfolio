import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [fade, setFade] = useState(true); // State for fade effect

  const nextSlide = () => {
    setFade(false); // Start fading out
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true); // Start fading in the new image
    }, 500); // Wait for the fade-out transition to complete
  };

  const prevSlide = () => {
    setFade(false); // Start fading out
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(true); // Start fading in the new image
    }, 400); // Wait for the fade-out transition to complete
  };

  const goToSlide = (index) => {
    setFade(false); // Start fading out
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true); // Start fading in the new image
    }, 400); // Wait for the fade-out transition to complete
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (images.length === 0) {
    return <p>No images to display.</p>;
  }

  // CSS styles as JavaScript objects
  const styles = {
    carouselContainer: {
      width: '100%',
      margin: '0 auto',
      position: 'relative',
    },
    carouselItem: {
      display: activeIndex === 0 ? 'block' : 'none', // Only show active item
      position: 'relative',
      transition: 'opacity 0.5s ease',
      opacity: fade ? 1 : 0, // Manage opacity for fading effect
    },
    img: {
      width: '100%',
      height: '100%',
      transition: 'opacity 0.5s ease', // Transition for fading effect
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
      border: 'none',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      border: '2px solid white',
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
    <div style={styles.carouselContainer}>
      <div className="carousel slide">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.carouselItem,
              display: activeIndex === index ? 'block' : 'none', // Only show active item
            }}
          >
            <img
              src={image.src}
              alt={image.caption.title}
              style={{
                ...styles.img,
                ...(hoveredIndex === index ? styles.imgHovered : {}),
              }}
              onMouseEnter={() => setHoveredIndex(index)} // Set hover state
              onMouseLeave={() => setHoveredIndex(null)} // Reset hover state
            />
            <div
              style={
                hoveredIndex === index
                  ? { ...styles.caption, ...styles.captionVisible }
                  : styles.caption
              }
            >
              <h5>{image.caption.title}</h5>
              <p>{image.caption.text}</p>
            </div>
          </div>
        ))}

        {/* Next and Previous buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          style={{ ...styles.controlButton, ...styles.prevButton }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={prevSlide}
        >
          <span
            className="carousel-control-prev-icon"
            style={{
              ...styles.controlIcon,
              ...(isHovered ? styles.controlIconHovered : {}),
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          style={{ ...styles.controlButton, ...styles.nextButton }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={nextSlide}
        >
          <span
            className="carousel-control-next-icon"
            style={{
              ...styles.controlIcon,
              ...(isHovered ? styles.controlIconHovered : {}),
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          ></span>
        </button>

        {/* Indicators with Rectangular Dots */}
        <div style={styles.indicators}>
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              style={
                activeIndex === index
                  ? { ...styles.indicatorDot, ...styles.activeDot }
                  : styles.indicatorDot
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
