import { lazy, Suspense, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import { FaArrowUp } from 'react-icons/fa';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import BackToTop from './components/BackToTop';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .scroll-container {
    scroll-behavior: smooth;
  }

  .section-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    
    @media (max-width: 768px) {
      padding: 1rem;
    }
  }
`;

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  opacity: 0.9;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    opacity: 1;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
`;

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { toggleTheme, theme } = useTheme();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingAnimation key="loading" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar toggleTheme={toggleTheme} theme={theme} />
              <AppContainer>
                <main className="scroll-container">
                  <div className="section-container">
                    <section id="home">
                      <Home />
                    </section>
                  </div>
                  <div className="section-container">
                    <section id="about">
                      <About />
                    </section>
                  </div>
                  <div className="section-container">
                    <section id="projects">
                      <Projects />
                    </section>
                  </div>
                  <div className="section-container">
                    <section id="contact">
                      <Contact />
                    </section>
                  </div>
                  <Footer />
                </main>
                <BackToTop />
                <AnimatePresence>
                  {showScrollButton && (
                    <ScrollToTopButton
                      onClick={scrollToTop}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaArrowUp />
                    </ScrollToTopButton>
                  )}
                </AnimatePresence>
              </AppContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
