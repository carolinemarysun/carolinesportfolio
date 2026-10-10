import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 6px;

  padding: 10px;
  padding-top: 60px;
  padding-bottom: 20px;

  p {
    margin: 0;
    font-size: 0.85rem;
    text-align: center;
  }

  .copyright {
    color: white;
  }

  .credit {
    color: white;
  }

  a {
    color: var(--neutral-500);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <p className="copyright">
        © 2026 Caroline Sun
      </p>

      <p className="credit">
        Designed & coded by me ·{' '}
        <a
          href="https://github.com/carolinemarysun"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;