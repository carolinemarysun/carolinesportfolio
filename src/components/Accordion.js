import React from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
    .accordion-button {
        padding: 0;
        background-color: var(--neutral-900) !important;
        border: none;
        display: flex;
        align-items: center;

        &:not(.collapsed) {
            background-color: transparent;
            border-color: var(--neutral-800);
            box-shadow: none;
        }

        &:hover,
        &:focus {
            border: none; /* Remove any default border */
            box-shadow: none !important; /* Remove shadow */
            outline: none !important; /* Remove outline */
        }

        &::after {
            color: var(--neutral-0);
            filter: brightness(0) invert(1);
        }

        &:focus {
            outline: none !important;
            box-shadow: none !important;
        }
    }

    .accordion-body {
        padding-top: 40px;
        padding-left: 10px;
        background-color: var(--neutral-900) !important;
    }

    .accordion-header h3 {
        color: var(--neutral-0) !important;
        margin-bottom: 0;
    }

    /* Add light gray border at the bottom of each accordion item and change it to white on hover */
    .accordion-header {
        border-bottom: 1px solid var(--neutral-800); /* Light gray bottom border */
        transition: border-color 0.3s ease; /* Smooth transition for the border color */
    }

    .accordion-header:hover {
        border-bottom: 1px solid white; /* Change border to white on hover */
    }

    /* Align the text with the chevron */
    .accordion-button h3 {
        margin: 0;
        padding-top: 20px;
    }

    .accordion-item {
        border: none; /* Ensure no border around the accordion item */
    }
`;

const Accordion = ({ items }) => {
    return (
        <AccordionContainer className="accordion accordion-flush" id="accordionFlushExample">
            {items.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`flush-heading${index}`}>
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#flush-collapse${index}`}
                            aria-expanded={index === 0}
                            aria-controls={`flush-collapse${index}`}
                        >
                            <h3>{item.header}</h3>
                        </button>
                    </h2>
                    <div
                        id={`flush-collapse${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        aria-labelledby={`flush-heading${index}`}
                    >
                        <div className="accordion-body">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </AccordionContainer>
    );
};

export default Accordion;
