import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo3D from './Logo3D';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: ${props => props.theme.colors.surface};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: background-color 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const LogoWrapper = styled.a`
  text-decoration: none;
  z-index: 1001;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    scale: 0.85;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.colors.surface};
    transition: all 0.3s ease-in-out;
    gap: 2rem;
    padding: 2rem;
    z-index: 1000;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: ${props => props.theme.colors.primary};
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  transition: color 0.3s ease;
  padding: 0;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileNav = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const MobileLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MobileRight = styled.div`
  display: flex;
  align-items: center;
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    display: none;
  }

  ${NavLinks} {
    margin: 0 auto;
    padding: 0 4rem;
  }
`;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills-section' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = navLinks.map(link => {
        let element;
        // Special handling for skills section
        if (link.path === 'skills-section') {
          element = document.getElementById('skills-section');
        } else {
          element = document.getElementById(link.path);
        }
        
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        const top = rect.top + scrollY;
        return {
          id: link.path,
          top,
          bottom: top + rect.height
        };
      }).filter(Boolean);

      // Find the section that's currently in view
      const viewportMiddle = scrollY + window.innerHeight / 3;
      let current = sections[0]?.id || 'home';

      for (const section of sections) {
        if (viewportMiddle >= section.top && viewportMiddle < section.bottom) {
          current = section.id;
          break;
        }
      }

      // Special handling for skills section
      if (current === 'about') {
        const skillsSection = document.getElementById('skills-section');
        if (skillsSection) {
          const skillsRect = skillsSection.getBoundingClientRect();
          const skillsTop = skillsRect.top + window.scrollY;
          const skillsBottom = skillsTop + skillsRect.height;
          if (viewportMiddle >= skillsTop && viewportMiddle < skillsBottom) {
            current = 'skills-section';
          }
        }
      }

      setActiveSection(current);
    };

    // Add debounced scroll listener
    let timeoutId = null;
    const debouncedScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set active section immediately
      setActiveSection(sectionId);

      // Calculate scroll position
      const navHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      // Smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      setIsOpen(false);
    }
  };

  return (
    <Nav>
      {/* Desktop Layout */}
      <DesktopNav>
        <LogoWrapper onClick={() => scrollToSection('home')}>
          <Logo3D />
        </LogoWrapper>
        <NavLinks>
          {navLinks.map((link, index) => (
            <NavLink 
              key={index}
              onClick={() => scrollToSection(link.path)}
              className={activeSection === link.path ? 'active' : ''}
            >
              {link.name}
            </NavLink>
          ))}
        </NavLinks>
        <ThemeToggle />
      </DesktopNav>

      {/* Mobile Layout */}
      <MobileNav>
        <MobileLeft>
          <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </HamburgerButton>
        </MobileLeft>
        <LogoWrapper onClick={() => scrollToSection('home')}>
          <Logo3D />
        </LogoWrapper>
        <MobileRight>
          <ThemeToggle />
        </MobileRight>
        <NavLinks isOpen={isOpen}>
          {navLinks.map((link, index) => (
            <NavLink 
              key={index}
              onClick={() => scrollToSection(link.path)}
              className={activeSection === link.path ? 'active' : ''}
            >
              {link.name}
            </NavLink>
          ))}
        </NavLinks>
      </MobileNav>
    </Nav>
  );
};

export default Navbar;
