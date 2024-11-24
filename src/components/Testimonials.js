import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const TestimonialsContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-weight: bold;
`;

const SubTitle = styled.p`
  color: ${props => props.theme.colors.text}99;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const TestimonialSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TestimonialCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  border: 1px solid ${props => props.theme.colors.border};
`;

const QuoteIcon = styled.div`
  color: ${props => props.theme.colors.primary}40;
  font-size: 3rem;
  position: absolute;
  top: -1rem;
  left: 2rem;
`;

const TestimonialText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.8;
  font-style: italic;
  margin: 1.5rem 0;
`;

const ClientInfo = styled.div`
  margin-top: 2rem;
`;

const ClientImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  object-fit: cover;
  border: 3px solid ${props => props.theme.colors.primary};
`;

const ClientName = styled.h4`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ClientRole = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
  color: ${props => props.theme.colors.accent};
`;

const NavigationButton = styled.button`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'prev' ? 'left: -60px' : 'right: -60px'};
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }

  @media (max-width: 768px) {
    ${props => props.direction === 'prev' ? 'left: -20px' : 'right: -20px'};
    width: 35px;
    height: 35px;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary}99;
  }
`;

const testimonials = [
  {
    text: "Working with Wave T3ch was an absolute pleasure. Their attention to detail and technical expertise transformed our vision into reality. The end result exceeded our expectations!",
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5
  },
  {
    text: "Exceptional problem-solving skills and a great communicator. They delivered our project on time and provided valuable insights throughout the development process.",
    name: "Michael Chen",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5
  },
  {
    text: "Their expertise in modern web technologies and best practices helped us create a stunning and performant application. Highly recommended for any web development project!",
    name: "Emily Rodriguez",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    let intervalId;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        paginate(1);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, paginate]);

  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <TestimonialsContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="testimonials"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SectionTitle>Client Testimonials</SectionTitle>
      <SubTitle>
        Here's what some of my clients have to say about working together
      </SubTitle>

      <TestimonialSlider>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <TestimonialCard
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            <TestimonialText>
              {testimonials[currentIndex].text}
            </TestimonialText>
            <Rating>
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </Rating>
            <ClientInfo>
              <ClientImage 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
              />
              <ClientName>{testimonials[currentIndex].name}</ClientName>
              <ClientRole>{testimonials[currentIndex].role}</ClientRole>
            </ClientInfo>
          </TestimonialCard>
        </AnimatePresence>

        <NavigationButton
          direction="prev"
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft />
        </NavigationButton>
        <NavigationButton
          direction="next"
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight />
        </NavigationButton>

        <Dots>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              active={currentIndex === index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </Dots>
      </TestimonialSlider>
    </TestimonialsContainer>
  );
};

export default Testimonials;
