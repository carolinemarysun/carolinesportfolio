import React, { useState } from 'react';
import Button from './Button';

const TrainWithMe = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError(false);
        setIsSending(true);

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(
                'https://formspree.io/f/mvkzrwzy',
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );

            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                setError(true);
            }

        } catch (err) {
            setError(true);

        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <style>
                {`
                    .train-with-me {
                        position: relative;

                        width: 100vw;
                        max-width: none;

                        margin-left: calc(50% - 50vw);
                        margin-right: calc(50% - 50vw);

                        padding: 120px 0;

                        box-sizing: border-box;
                    }

                    .train-with-me-container {
                        width: 100%;
                        max-width: none;

                        margin: 0;

                        padding-left: 7%;
                        padding-right: 7%;

                        box-sizing: border-box;
                    }

                    .train-with-me-header {
                        width: 100%;
                        max-width: 900px;

                        margin: 0 0 50px;
                    }

                    .train-with-me-label {
                        margin: 0 0 14px;

                        color: var(--neutral-500);

                        font-size: 0.85rem;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                    }

                    .train-with-me-header h2 {
                        margin: 0 0 20px;

                        max-width: 700px;
                    }

                    .train-with-me-intro {
                        margin: 0;

                        max-width: 650px;

                        color: var(--neutral-400);

                        line-height: 1.6;
                    }

                    .train-with-me-form {
                        width: 100%;
                        max-width: 900px;

                        display: grid;
                        grid-template-columns:
                            repeat(2, minmax(0, 1fr));

                        gap: 24px;
                    }

                    .form-group {
                        display: flex;
                        flex-direction: column;

                        gap: 9px;
                    }

                    .form-group.full-width {
                        grid-column: 1 / -1;
                    }

                    .form-group label,
                    .coaching-type-label {
                        font-size: 0.8rem;
                        font-weight: 500;

                        letter-spacing: 0.06em;
                        text-transform: uppercase;

                        color: var(--neutral-400);
                    }

                    .form-group input,
                    .form-group textarea {
                        width: 100%;

                        padding: 14px 16px;

                        border:
                            1px solid
                            rgba(255, 255, 255, 0.22);

                        border-radius: 6px;

                        background: transparent;

                        color: white;

                        font-family: inherit;
                        font-size: 1rem;

                        box-sizing: border-box;

                        transition:
                            border-color 0.25s ease;
                    }

                    .form-group textarea {
                        min-height: 150px;

                        resize: vertical;
                    }

                    .form-group input:focus,
                    .form-group textarea:focus {
                        outline: none;

                        border-color: white;
                    }

                    .form-group input::placeholder,
                    .form-group textarea::placeholder {
                        color: var(--neutral-500);
                    }

                    .coaching-type {
                        grid-column: 1 / -1;
                    }

                    .coaching-options {
                        display: flex;
                        flex-wrap: wrap;

                        gap: 12px;

                        margin-top: 10px;
                    }

                    .coaching-option {
                        position: relative;
                    }

                    .coaching-option input {
                        position: absolute;

                        opacity: 0;
                        pointer-events: none;
                    }

                    .coaching-option label {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;

                        padding: 12px 18px;

                        border:
                            1px solid
                            rgba(255, 255, 255, 0.25);

                        border-radius: 6px;

                        color: white;

                        cursor: pointer;

                        transition:
                            background 0.25s ease,
                            color 0.25s ease,
                            border-color 0.25s ease;
                    }

                    .coaching-option input:checked + label {
                        background: white;

                        color: var(--neutral-900);

                        border-color: white;
                    }

                    .location-note {
                        margin-top: 10px;

                        font-size: 0.85rem;

                        color: var(--neutral-500);
                    }

                    .form-success {
                        width: 100%;
                        max-width: 900px;

                        padding: 30px;

                        border:
                            1px solid
                            rgba(255, 255, 255, 0.22);

                        border-radius: 10px;

                        box-sizing: border-box;
                    }

                    .form-success h3 {
                        margin-top: 0;
                        margin-bottom: 10px;
                    }

                    .form-success p {
                        margin: 0;

                        color: var(--neutral-400);
                    }

                    .form-error {
                        grid-column: 1 / -1;

                        margin: 0;

                        color: #ff8f8f;

                        font-size: 0.9rem;
                        line-height: 1.5;
                    }

                    .form-error a {
                        color: white;

                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }

                    .form-error a:hover {
                        opacity: 0.8;
                    }


                    @media (max-width: 768px) {

                        .train-with-me {
                            padding: 140px 0 80px;
                        }

                        .train-with-me-container {
                            padding-left: 30px;
                            padding-right: 30px;
                        }

                        #train-with-me h2 {
                            font-size: 2rem !important;
                            line-height: 1.15;
                        }

                        .train-with-me-header {
                            max-width: 100%;
                        }

                        .train-with-me-form {
                            max-width: 100%;

                            grid-template-columns: 1fr;
                        }

                        .form-group.full-width,
                        .coaching-type,
                        .train-with-me-submit,
                        .form-error {
                            grid-column: 1;
                        }

                        .coaching-options {
                            flex-direction: column;
                        }

                        .coaching-option {
                            width: 100%;
                        }

                        .coaching-option label {
                            width: 100%;

                            box-sizing: border-box;
                        }

                        .train-with-me-submit {
                            width: 100%;

                            text-align: center;
                        }

                        .form-success {
                            max-width: 100%;
                        }
                    }
                `}
            </style>

            <section
                id="train-with-me"
                className="train-with-me"
            >
                <div className="train-with-me-container">

                    <div className="train-with-me-header">

                        <p className="train-with-me-label">
                            TRAIN WITH ME
                        </p>

                        <h2>
                            Ready to get started?
                        </h2>

                        <p className="train-with-me-intro">
                            Tell me a little about yourself and what
                            you're looking for. I offer in-person
                            coaching in Washington, D.C. as well as
                            online coaching.
                        </p>

                    </div>


                    {submitted ? (

                        <div className="form-success">

                            <h3>
                                Thanks for reaching out!
                            </h3>

                            <p>
                                I received your message and will be
                                in touch soon.
                            </p>

                        </div>

                    ) : (

                        <form
                            className="train-with-me-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="form-group">

                                <label htmlFor="name">
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@email.com"
                                    required
                                />

                            </div>


                            <div className="form-group full-width">

                                <label htmlFor="phone">
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Your phone number"
                                    required
                                />

                            </div>


                            <div className="coaching-type">

                                <span className="coaching-type-label">
                                    What are you interested in?
                                </span>

                                <div className="coaching-options">

                                    <div className="coaching-option">

                                        <input
                                            id="in-person"
                                            name="coachingType"
                                            type="radio"
                                            value="In-Person Coaching"
                                            required
                                        />

                                        <label htmlFor="in-person">
                                            In-Person
                                        </label>

                                    </div>


                                    <div className="coaching-option">

                                        <input
                                            id="online"
                                            name="coachingType"
                                            type="radio"
                                            value="Online Coaching"
                                        />

                                        <label htmlFor="online">
                                            Online
                                        </label>

                                    </div>


                                    <div className="coaching-option">

                                        <input
                                            id="not-sure"
                                            name="coachingType"
                                            type="radio"
                                            value="Not Sure Yet"
                                        />

                                        <label htmlFor="not-sure">
                                            Not Sure Yet
                                        </label>

                                    </div>

                                </div>

                            </div>


                            <div className="form-group full-width">

                                <label htmlFor="message">
                                    Anything else you'd like me to know?
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your goals, training experience, schedule, or anything else you'd like to share."
                                />

                            </div>


                            {error && (
                                <p className="form-error">
                                    Something went wrong. Please try
                                    again, or email me directly at{' '}

                                    <a href="mailto:carolinemarysun@gmail.com">
                                        carolinemarysun@gmail.com
                                    </a>
                                    .
                                </p>
                            )}


                            <Button
                                type="submit"
                                arrow={true}
                                disabled={isSending}
                            >
                                {isSending
                                    ? 'Sending...'
                                    : 'Submit'}
                            </Button>

                        </form>
                    )}

                </div>
            </section>
        </>
    );
};

export default TrainWithMe;