import React, { useState, useEffect } from 'react';
import * as S from './Navbar.style';
import { NAV_ITEMS, NavItem } from './const/NavItems';
import { Link } from 'react-scroll';
// @ts-ignore
import { ReactComponent as Logo } from '../../assets/schoolLogo.svg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const handleScroll = () => {
        // Sprawdzanie, czy strona jest przewijana
        const scrolled = window.scrollY > 0;
        setIsScrolled(scrolled);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        // Dodawanie event listenera po zamontowaniu komponentu
        window.addEventListener('scroll', handleScroll);

        // Usuwanie event listenera po odmontowaniu komponentu
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <S.Container isScrolled={isScrolled}>
            <S.NavContent>
                <S.Logo>
                    <Logo width={'50px'} height={'50px'} />
                    <p>Whizkids</p>
                </S.Logo>
                <S.NavItems isMobileMenuOpen={isMobileMenuOpen}>
                    {NAV_ITEMS.map((item: NavItem) => (
                        <S.NavItem key={item.label}>
                            <Link
                                to={item.routing}
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                {item.label}
                            </Link>
                        </S.NavItem>
                    ))}
                </S.NavItems>
                <S.MobileMenuIcon onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? 'X' : '☰'}
                </S.MobileMenuIcon>
            </S.NavContent>
        </S.Container>
    );
};

export default Navbar;
