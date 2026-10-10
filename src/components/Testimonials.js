import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
    {
        name: "Shahin R.",
        type: "In-Person Client",
        image: "/images/testimonials/shahin.webp",
        quote:
            "Working with Caroline for the past 10 weeks has completely changed my approach to training and my results. I came from a running and HIIT background and had hit a plateau, but Caroline helped me get stronger than I ever thought possible. She built a program tailored to my goals, taught me how to lift with confidence, and showed me that strength training doesn’t mean getting bulky. I feel more balanced, love how my body looks, and feel empowered every time I train. I’m so grateful for the progress and confidence I’ve gained working with Caroline."
    },
    {
        name: "Laura C.",
        type: "In-Person Client",
        image: "/images/testimonials/laura.webp",
        quote:
            "I cannot say enough great things about training with Caroline! I started personal training with her feeling very intimidated by the gym, and she created an encouraging environment from day one. She listened closely to my goals and created enjoyable programs that helped me reach them. During sessions, she was attentive in correcting my form, explaining movements, and celebrating wins. She also provided a perfect balance of being challenged while keeping things sustainable. I feel stronger and more confident in the gym after training with her. Highly recommend to anyone serious about getting results."
    },
    {
        name: "Amanda S.",
        type: "In-Person Client",
        image: "/images/testimonials/amanda.webp",
        quote:
            "Training with Caroline for the past six weeks has been the best investment I could’ve made for my health and fitness. Caroline is very knowledgeable, motivating, and supportive. I used to feel nervous and unsure of myself in the gym. Caroline has helped me feel confident, strong, and excited to work out. She has gotten me on track with my goals so that I’ve already been able to see and feel great progress. I’m thankful to have met Caroline because she has changed my eating and training habits for the better."
    },
    {
        name: "Sarah S.",
        type: "In-Person Client",
        image: "/images/testimonials/sarah.webp",
        quote:
            "Caroline is incredible! I already had a good fitness foundation but was always too intimidated to try lifting with barbells. Caroline not only taught me how to lift with proper form but also coached me so that I hit PRs each week. Her knowledge and personal experience in bodybuilding and lifting heavy made me feel empowered to know I was learning from the best and trust her process. I now know proper technique to lift safely and also have new confidence when I go to the gym. If you’re interested in hitting PRs or getting into lifting for the first time, Caroline is your girl!"
    },
    {
        name: "Anne H.",
        type: "Hybrid Client",
        image: "/images/testimonials/anne.webp",
        quote:
            "Training with Caroline has been such a positive experience. She gives clear, thoughtful instructions and really emphasizes proper form, which makes me feel safe and supported. She listens carefully and tailors my program to my goals in a way that actually makes sense and is easy to stick with. She’s motivating, inspiring, and constantly pushes me to get stronger. I truly look forward to our sessions."
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("right");
    const [isInView, setIsInView] = useState(false);

    const testimonialsRef = useRef(null);

    const goToPrevious = () => {
        setDirection("left");

        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setDirection("right");

        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const goToIndex = (index) => {
        if (index === currentIndex) return;

        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    useEffect(() => {
        const element = testimonialsRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.intersectionRatio >= 0.75);
            },
            {
                threshold: [0, 0.25, 0.5, 0.75, 1]
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isInView || testimonials.length <= 1) {
            return;
        }

        const timer = setTimeout(() => {
            setDirection("right");

            setCurrentIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 7000);

        return () => clearTimeout(timer);
    }, [currentIndex, isInView]);

    const testimonial = testimonials[currentIndex];

    return (
        <>
            <style>
                {`
                    .testimonial-carousel {
                        width: fit-content;
                        max-width: 100%;
                    }

                    .testimonial-row {
                        display: flex;
                        align-items: center;
                        gap: 18px;
                    }

                    .testimonial-slide {
                        width: fit-content;
                        max-width: 850px;
                        min-height: 220px;

                        padding: 36px 42px;

                        border: 1px solid rgba(255, 255, 255, 0.22);
                        border-radius: 14px;

                        background: transparent;

                        box-sizing: border-box;

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    @keyframes testimonialSlideFromRight {
                        from {
                            opacity: 0;
                            transform: translateX(40px);
                        }

                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes testimonialSlideFromLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-40px);
                        }

                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    .testimonial-slide.slide-from-right {
                        animation: testimonialSlideFromRight 0.45s ease;
                    }

                    .testimonial-slide.slide-from-left {
                        animation: testimonialSlideFromLeft 0.45s ease;
                    }

                    .testimonial-person {
                        display: flex;
                        align-items: center;
                        gap: 18px;

                        margin-bottom: 26px;
                    }

                    .testimonial-avatar {
                        width: 56px;
                        height: 56px;

                        object-fit: cover;

                        border-radius: 50%;
                        border: 2px solid white;

                        flex-shrink: 0;
                    }

                    .testimonial-person-text {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                    }

                    .testimonial-name {
                        font-size: 0.95rem;
                        font-weight: 600;

                        letter-spacing: 0;
                        text-transform: none;

                        color: var(--neutral-0);
                    }

                    .testimonial-client-type {
                        font-size: 0.75rem;
                        line-height: 1.2;

                        letter-spacing: 0.08em;
                        text-transform: uppercase;

                        color: var(--neutral-500);
                    }

                    .testimonial-quote {
                        margin: 0;

                        max-width: 700px;

                        font-family: inherit;

                        font-size: 1rem;
                        line-height: 1.6;

                        font-weight: 400;

                        color: var(--neutral-0);
                    }

                    .testimonial-arrow {
                        width: 42px;
                        height: 42px;

                        flex-shrink: 0;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        padding: 0;

                        border: 1px solid rgba(255, 255, 255, 0.35);
                        border-radius: 50%;

                        background: var(--neutral-900);

                        color: white;

                        font-size: 1.2rem;
                        line-height: 1;

                        cursor: pointer;

                        transition:
                            background 0.3s ease,
                            color 0.3s ease;
                    }

                    .testimonial-arrow:hover {
                        background: white;
                        color: var(--neutral-900);
                    }

                    .testimonial-indicators {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        gap: 9px;

                        width: calc(100% - 120px);
                        max-width: 850px;

                        margin: 20px auto 0;
                    }

                    .testimonial-indicator {
                        width: 30px;
                        height: 4px;

                        padding: 0;

                        border: none;

                        background: rgba(255, 255, 255, 0.18);

                        cursor: pointer;

                        transition: background 0.3s ease;
                    }

                    .testimonial-indicator.active {
                        background: white;
                    }

                    @media (max-width: 1000px) {
                        .testimonial-slide {
                            max-width: 700px;
                        }
                    }

                    /* =========================
                       MOBILE
                    ========================= */

                    @media (max-width: 768px) {

                        .testimonial-carousel {
                            width: 100vw;
                            max-width: none;

                            margin-left: calc(50% - 50vw);
                            margin-right: calc(50% - 50vw);
                        }

                        .testimonial-row {
                            width: 100%;

                            display: grid;

                            grid-template-columns:
                                40px
                                minmax(0, 1fr)
                                40px;

                            gap: 2px;

                            align-items: center;
                        }

                        .testimonial-slide {
                            width: 100%;
                            max-width: none;

                            min-width: 0;
                            min-height: 0;

                            padding: 24px 16px;
                        }

                        .testimonial-avatar {
                            width: 72px;
                            height: 72px;
                        }

                        .testimonial-person {
                            gap: 14px;
                            margin-bottom: 24px;
                        }

                        .testimonial-name {
                            font-size: 0.95rem;
                        }

                        .testimonial-client-type {
                            font-size: 0.7rem;
                            letter-spacing: 0.08em;
                        }

                        .testimonial-quote {
                            width: 100%;
                            max-width: none;
                        }

                        .testimonial-arrow {
                            width: 34px;
                            height: 34px;

                            font-size: 0.95rem;
                        }

                        .testimonial-arrow:first-child {
                            justify-self: start;
                            margin-left: 4px;
                        }

                        .testimonial-arrow:last-child {
                            justify-self: end;
                            margin-right: 4px;
                        }

                        .testimonial-indicators {
                            width: calc(100% - 84px);
                            max-width: none;

                            gap: 7px;

                            margin-top: 16px;
                        }

                        .testimonial-indicator {
                            width: 24px;
                            height: 4px;
                        }
                    }
                `}
            </style>

            <div
                ref={testimonialsRef}
                className="testimonial-carousel"
            >
                <div className="testimonial-row">

                    <button
                        className="testimonial-arrow"
                        onClick={goToPrevious}
                        aria-label="Previous testimonial"
                        type="button"
                    >
                        ←
                    </button>

                    <div
                        className={`testimonial-slide ${
                            direction === "right"
                                ? "slide-from-right"
                                : "slide-from-left"
                        }`}
                        key={currentIndex}
                    >
                        <div className="testimonial-person">

                            {testimonial.image && (
                                <img
                                    src={testimonial.image}
                                    alt=""
                                    className="testimonial-avatar"
                                    loading="lazy"
                                    decoding="async"
                                />
                            )}

                            <div className="testimonial-person-text">

                                <span className="testimonial-name">
                                    {testimonial.name}
                                </span>

                                <span className="testimonial-client-type">
                                    {testimonial.type}
                                </span>

                            </div>

                        </div>

                        <p className="testimonial-quote">
                            “{testimonial.quote}”
                        </p>

                    </div>

                    <button
                        className="testimonial-arrow"
                        onClick={goToNext}
                        aria-label="Next testimonial"
                        type="button"
                    >
                        →
                    </button>

                </div>

                <div className="testimonial-indicators">

                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonial-indicator ${
                                index === currentIndex ? 'active' : ''
                            }`}
                            onClick={() => goToIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                            type="button"
                        />
                    ))}

                </div>

            </div>
        </>
    );
};

export default Testimonials;