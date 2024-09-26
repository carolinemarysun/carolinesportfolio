import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the navbar
const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin: 10px 50px;
`;

const NavList = styled.ul`
    list-style-type: none;
    padding: 15px 15px;
    display: flex;
    border-radius: 50px;
    backdrop-filter: blur(14px);
    border: 1px solid var(--neutral-800);
    background: rgba(21, 20, 20, 0.2);
    transition: border-color 0.3s ease;

    &:hover {
        border-color: var(--neutral-0);
    }
`;

const NavItem = styled.li`
    margin: 5px 15px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: var(--neutral-500);
    transition: color 0.5s ease;

    &.active {
        color: var(--neutral-0); /* White for active link */
    }

    &:hover {
        color: var(--neutral-0);
    }
`;

// Define the links within the NavBar component
const links = [
    { href: '/', label: 'My Work' },
    { href: '/about-me', label: 'About Me' },
    { href: '/contact', label: 'Contact' },
];

const NavBar = () => {
    const location = useLocation();

    return (
        <Nav>
            <NavList>
                {links.map((link) => (
                    <NavItem key={link.href}>
                        <NavLink
                            to={link.href}
                            className={
                                location.pathname === link.href ? 'active' : ''
                            }
                        >
                            {link.label}
                        </NavLink>
                    </NavItem>
                ))}
            </NavList>
        </Nav>
    );
};

export default NavBar;
