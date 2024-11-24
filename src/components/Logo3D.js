import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled(motion.div)`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
  perspective: 500px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    transform-origin: left center;
  }
`;

const LogoText = styled(motion.span)`
  display: inline-block;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.1),
    -2px -2px 4px rgba(255, 255, 255, 0.1);
  letter-spacing: 1px;
  transform-style: preserve-3d;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    letter-spacing: 0.5px;
  }
`;

const Highlight = styled.span`
  color: ${props => props.theme.colors.accent};
  -webkit-text-fill-color: ${props => props.theme.colors.accent};
`;

const Logo3D = () => {
  return (
    <LogoContainer
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <LogoText
        initial={{ rotateX: -30 }}
        animate={{
          rotateX: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut"
          }
        }}
        whileHover={{
          rotateY: [0, 10, -10, 0],
          transition: {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity
          }
        }}
      >
        Wave <Highlight>T3ch</Highlight>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo3D;
