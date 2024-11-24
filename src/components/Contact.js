import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const FormContainer = styled(motion.form)`
  width: 100%;
  max-width: 700px;
  background: ${props => `linear-gradient(135deg, ${props.theme.colors.surface}, ${props.theme.colors.background})`};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.primary}15;
`;

const InputGroup = styled(motion.div)`
  position: relative;
  margin-bottom: 2rem;

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
  }
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid ${props => props.theme.colors.primary}30;
  border-radius: 12px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 4px ${props => props.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${props => props.theme.colors.text}60;
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid ${props => props.theme.colors.primary}30;
  border-radius: 12px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 4px ${props => props.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${props => props.theme.colors.text}60;
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  border: 2px solid transparent;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: ${props => props.theme.colors.success || '#4CAF50'};
  color: white;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ErrorMessage = styled(motion.div)`
  background: ${props => props.theme.colors.error || '#f44336'};
  color: white;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    emailjs.init('VU0KjZLDYY7HtdAlO');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      // Create template parameters with reply_to
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        message: formData.message,
        reply_to: formData.from_email, // Set reply-to field
      };

      const result = await emailjs.send(
        'service_pcncjeq',
        'template_kt8kvsa',
        templateParams,
        'VU0KjZLDYY7HtdAlO'
      );

      if (result.status === 200) {
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({
          from_name: '',
          from_email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
      if (formStatus.type === 'success') {
        setTimeout(() => {
          setFormStatus({ type: '', message: '' });
        }, 5000);
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <ContactContainer
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <SectionTitle>Get In Touch</SectionTitle>
      <SubTitle>
        Have a question or want to work together? Drop me a message!
      </SubTitle>

      <FormContainer
        ref={form}
        onSubmit={handleSubmit}
        variants={formVariants}
      >
        <InputGroup variants={inputVariants}>
          <FiUser />
          <Input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup variants={inputVariants}>
          <FiMail />
          <Input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup variants={inputVariants}>
          <FiMessageSquare />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={buttonVariants}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'} <FiSend />
        </SubmitButton>

        <AnimatePresence>
          {formStatus.type === 'success' && (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FiCheckCircle /> {formStatus.message}
            </SuccessMessage>
          )}
          {formStatus.type === 'error' && (
            <ErrorMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FiAlertCircle /> {formStatus.message}
            </ErrorMessage>
          )}
        </AnimatePresence>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
