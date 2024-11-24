import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${props => props.theme.colors.background};
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 500;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
