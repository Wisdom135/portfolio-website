import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import TypeWriter from './TypeWriter';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  position: relative;
`;

const Content = styled(motion.div)`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.textSecondary};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.surface};
  border: 2px solid ${props => props.theme.colors.border};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <HomeContainer id="home">
      <Content
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>
          <TypeWriter text="Hi, I'm WAVE T3CH" delay={100} />
        </Title>
        <Subtitle variants={itemVariants}>
          Full Stack Developer
        </Subtitle>
        <Description variants={itemVariants}>
          I create elegant solutions to complex problems, specializing in full-stack development
          with modern technologies. Let's build something amazing together.
        </Description>
        <SocialLinks
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <SocialLink 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink 
            href="https://twitter.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
      </Content>
    </HomeContainer>
  );
};

export default Home;
