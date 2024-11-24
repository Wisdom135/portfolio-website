import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.surface};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const QuickLink = styled(motion.a)`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Me</FooterTitle>
          <FooterText>
            A passionate developer focused on creating intuitive and efficient web solutions. 
            Always eager to take on new challenges and learn new technologies.
          </FooterText>
          <SocialLinks>
            <SocialIcon 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon 
              href="https://twitter.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon 
              href="mailto:wisdomkk12@gmail.com" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <QuickLinks>
            <QuickLink 
              href="#home"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </QuickLink>
            <QuickLink 
              href="#about"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </QuickLink>
            <QuickLink 
              href="#skills"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </QuickLink>
            <QuickLink 
              href="#projects"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </QuickLink>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>
            Feel free to reach out to me for collaborations or opportunities.
          </FooterText>
          <FooterText>
            Email: your.wisdomkk12@gmail.com
          </FooterText>
          <FooterText>
            Location: PortHarcourt, Nigeria
          </FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {currentYear} Wave T3ch. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
