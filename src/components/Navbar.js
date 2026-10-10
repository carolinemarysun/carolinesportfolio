import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 1000;

    width: 100%;
`;

/* =========================
   DESKTOP NAV
========================= */

const DesktopNavWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 0;
    margin: 10px 50px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavList = styled.ul`
    list-style: none;

    padding: 15px;
    margin: 0;

    display: flex;

    border-radius: 50px;

    backdrop-filter: blur(14px);

    border: 1px solid var(--neutral-800);

    background: rgba(21, 20, 20, 0.3);

    transition: border-color 0.3s ease;

    &:hover {
        border-color: var(--neutral-0);
    }
`;

const NavItem = styled.li`
    margin: 5px 15px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    color: var(--neutral-500);

    transition: color 0.3s ease;

    &.active {
        color: var(--neutral-0);
    }

    &:hover {
        color: var(--neutral-0);
    }
`;

const TrainButton = styled.button`
    background: none;
    border: none;

    padding: 0;
    margin: 0;

    font: inherit;

    color: var(--neutral-500);

    cursor: pointer;

    transition: color 0.3s ease;

    &:hover {
        color: var(--neutral-0);
    }
`;

/* =========================
   MOBILE TOP BAR
========================= */

const MobileHeader = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        width: 100%;

        padding: 2px 18px;

        box-sizing: border-box;

        background: rgba(10, 10, 10, 0.35);

        backdrop-filter: blur(10px);

        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
`;

const MenuButton = styled.button`
    width: 40px;
    height: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 5px;

    padding: 0;

    background: transparent;
    border: none;

    cursor: pointer;
`;

const MenuLine = styled.span`
    display: block;

    width: 24px;
    height: 1.5px;

    background: white;
`;

/* =========================
   MOBILE OVERLAY
========================= */

const MobileMenu = styled.div`
    display: none;

    @media (max-width: 768px) {
        position: fixed;

        top: 0;
        left: 0;
        right: 0;

        width: 100%;

        display: ${({ $open }) => ($open ? 'flex' : 'none')};

        flex-direction: column;

        min-height: 100vh;

        padding: 22px 28px 30px;

        box-sizing: border-box;

        background: rgba(8, 8, 8, 0.78);

        backdrop-filter: blur(12px);

        z-index: 1100;
    }
`;

const CloseButton = styled.button`
    position: absolute;

    top: 14px;
    right: 18px;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;

    color: white;

    font-size: 2rem;
    font-weight: 200;
    line-height: 1;

    cursor: pointer;
`;

const MobileMenuInner = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;

    margin-top: 70px;

    width: 100%;
`;

const MobileNavLink = styled(Link)`
    width: fit-content;

    text-decoration: none;

    font-size: 1rem;
    font-weight: 400;

    color: var(--neutral-400);

    transition: color 0.3s ease;

    &.active {
        color: white;
    }

    &:hover {
        color: white;
    }
`;

const MobileTrainButton = styled.button`
    width: fit-content;

    padding: 0;

    background: transparent;
    border: none;

    font: inherit;
    font-size: 1rem;

    color: var(--neutral-400);

    cursor: pointer;

    transition: color 0.3s ease;

    &:hover {
        color: white;
    }
`;

const ActiveLine = styled.div`
    width: 42px;
    height: 1px;

    margin-top: -12px;

    background: rgba(255, 255, 255, 0.75);
`;

/* =========================
   NAVBAR
========================= */

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleTrainWithMe = () => {
        closeMenu();

        /*
         * Already on Home:
         * scroll directly to the section.
         */
        if (location.pathname === '/') {
            const element = document.getElementById('train-with-me');

            if (!element) return;

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            return;
        }

        /*
         * From About / Contact:
         * navigate to Home using the hash.
         * Home.js handles the final positioning.
         */
        navigate('/#train-with-me');
    };

    return (
        <Nav>

            {/* DESKTOP */}

            <DesktopNavWrap>
                <NavList>

                    <NavItem>
                        <StyledLink
                            to="/"
                            className={
                                location.pathname === '/'
                                    ? 'active'
                                    : ''
                            }
                        >
                            Home
                        </StyledLink>
                    </NavItem>

                    <NavItem>
                        <StyledLink
                            to="/about"
                            className={
                                location.pathname === '/about'
                                    ? 'active'
                                    : ''
                            }
                        >
                            About
                        </StyledLink>
                    </NavItem>

                    <NavItem>
                        <TrainButton
                            type="button"
                            onClick={handleTrainWithMe}
                        >
                            Train With Me
                        </TrainButton>
                    </NavItem>

                    <NavItem>
                        <StyledLink
                            to="/contact"
                            className={
                                location.pathname === '/contact'
                                    ? 'active'
                                    : ''
                            }
                        >
                            Contact
                        </StyledLink>
                    </NavItem>

                </NavList>
            </DesktopNavWrap>


            {/* MOBILE CLOSED BAR */}

            <MobileHeader>
                <MenuButton
                    type="button"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(true)}
                >
                    <MenuLine />
                    <MenuLine />
                    <MenuLine />
                </MenuButton>
            </MobileHeader>


            {/* MOBILE FULL SCREEN MENU */}

            <MobileMenu $open={menuOpen}>

                <CloseButton
                    type="button"
                    aria-label="Close menu"
                    onClick={closeMenu}
                >
                    ×
                </CloseButton>

                <MobileMenuInner>

                    <MobileNavLink
                        to="/"
                        className={
                            location.pathname === '/'
                                ? 'active'
                                : ''
                        }
                        onClick={closeMenu}
                    >
                        Home
                    </MobileNavLink>

                    {location.pathname === '/' && (
                        <ActiveLine />
                    )}


                    <MobileNavLink
                        to="/about"
                        className={
                            location.pathname === '/about'
                                ? 'active'
                                : ''
                        }
                        onClick={closeMenu}
                    >
                        About
                    </MobileNavLink>

                    {location.pathname === '/about' && (
                        <ActiveLine />
                    )}


                    <MobileTrainButton
                        type="button"
                        onClick={handleTrainWithMe}
                    >
                        Train With Me
                    </MobileTrainButton>


                    <MobileNavLink
                        to="/contact"
                        className={
                            location.pathname === '/contact'
                                ? 'active'
                                : ''
                        }
                        onClick={closeMenu}
                    >
                        Contact
                    </MobileNavLink>

                    {location.pathname === '/contact' && (
                        <ActiveLine />
                    )}

                </MobileMenuInner>

            </MobileMenu>

        </Nav>
    );
};

export default Navbar;