import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-top: 60px;
  p {
    color: var(--neutral-500);
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <p>Designed and coded by Caroline Sun.</p>
    </StyledFooter>
  );
};

export default Footer;
