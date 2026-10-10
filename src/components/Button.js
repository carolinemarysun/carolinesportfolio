import React from 'react';

const Button = ({
    href,
    children,
    arrow = true,
    className = '',
    onClick,
    type = 'button',
    disabled = false,
}) => {
    const content = (
        <>
            <span>{children}</span>

            {arrow && (
                <span className="site-button-arrow">
                    →
                </span>
            )}
        </>
    );

    return (
        <>
            <style>
                {`
                    .site-button {
                        display: inline-flex;
                        align-items: center;
                        gap: 10px;

                        width: fit-content;

                        padding: 12px 18px;

                        background: transparent;

                        border: 1px solid white;
                        border-radius: 15px;

                        color: white;

                        text-decoration: none;

                        font-size: 0.95rem;
                        font-weight: 600;

                        cursor: pointer;

                        transition:
                            background 0.3s ease,
                            color 0.3s ease,
                            transform 0.3s ease,
                            opacity 0.3s ease;
                    }

                    .site-button:hover:not(:disabled) {
                        background: white;
                        color: var(--neutral-900);

                        transform: translateY(-2px);
                    }

                    .site-button:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .site-button-arrow {
                        font-size: 1.1rem;

                        transition: transform 0.3s ease;
                    }

                    .site-button:hover .site-button-arrow {
                        transform: translateX(4px);
                    }
                `}
            </style>

            {href ? (
                <a
                    href={href}
                    onClick={onClick}
                    className={`site-button ${className}`}
                >
                    {content}
                </a>
            ) : (
                <button
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
                    className={`site-button ${className}`}
                >
                    {content}
                </button>
            )}
        </>
    );
};

export default Button;