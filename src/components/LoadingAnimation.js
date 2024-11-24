import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LogoText = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const LoadingBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background: ${props => props.theme.colors.border};
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.primary};
  position: absolute;
`;

const LoadingAnimation = () => {
  return (
    <LoadingContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LogoText
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        WAVE T3CH
      </LogoText>
      <LoadingBar>
        <Progress
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'linear'
          }}
        />
      </LoadingBar>
    </LoadingContainer>
  );
};

export default LoadingAnimation;
