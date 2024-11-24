import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

export const themes = {
  light: {
    colors: {
      primary: '#4f46e5',      // Indigo - modern and professional
      secondary: '#8b5cf6',    // Vibrant violet - softer than before
      background: '#fafafa',   // Slightly off-white for less eye strain
      surface: '#ffffff',      // Pure white for cards
      text: '#18181b',         // Rich black for better readability
      textSecondary: '#4b5563', // Perfect balance for secondary text
      border: '#e5e7eb',       // Subtle border
      hover: '#eef2ff',        // Gentle hover state
      accent: '#f97316',       // Vibrant orange for CTAs
      gradient1: '#4f46e5',    // For gradient effects
      gradient2: '#8b5cf6',    // For gradient effects
      shadow: 'rgba(0, 0, 0, 0.05)'  // Subtle shadow
    }
  },
  dark: {
    colors: {
      primary: '#3b82f6',      // Brighter blue for dark mode
      secondary: '#a855f7',    // Brighter purple for dark mode
      background: '#0f172a',   // Rich dark blue background
      surface: '#1e293b',      // Slightly lighter surface
      text: '#f8fafc',         // Off-white text
      textSecondary: '#94a3b8', // Softer secondary text
      border: '#334155',       // More visible borders
      hover: '#1e40af',        // Dark blue hover state
      accent: '#f97316',       // Matching orange accent
      gradient1: '#3b82f6',    // For gradient effects
      gradient2: '#a855f7',    // For gradient effects
      shadow: 'rgba(0, 0, 0, 0.3)'   // Stronger shadow for dark mode
    }
  }
};

export const ThemeProvider = ({ children }) => {
  // Get theme from localStorage or default to system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themes[currentTheme].colors.background);
    }
  }, [currentTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setCurrentTheme(e.matches ? 'dark' : 'light');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], toggleTheme, currentTheme }}>
      <StyledThemeProvider theme={themes[currentTheme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
