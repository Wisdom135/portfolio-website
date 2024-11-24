import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPython, SiDocker } from 'react-icons/si';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  max-width: 500px;
  height: 400px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${props => props.theme.colors.primary}40,
      ${props => props.theme.colors.secondary}40
    );
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const ProfileImage = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceItem = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 2px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ExperienceNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ExperienceLabel = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const SkillsSection = styled.div`
  margin-top: 8rem;
  padding: 4rem 0;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1.5rem 0;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SkillItem = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.iconColor};
  }

  svg {
    font-size: 2rem;
    color: ${props => props.iconColor};
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    
    svg {
      font-size: 1.75rem;
    }
  }
`;

const SkillContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const SkillName = styled.h3`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
  margin: 0 0 0.5rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 0 0.35rem 0;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${props => `${props.theme.colors.border}50`};
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${props => props.color}dd,
    ${props => props.color}
  );
  border-radius: 3px;
`;

const ProficiencyLabel = styled(motion.div)`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-top: 0.35rem;
  font-weight: 500;
`;

const About = () => {
  const skillsData = [
    { name: 'React', Icon: FaReact, color: '#61DAFB', url: 'https://reactjs.org', proficiency: 90 },
    { name: 'Node.js', Icon: FaNodeJs, color: '#339933', url: 'https://nodejs.org', proficiency: 85 },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', proficiency: 95 },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', url: 'https://www.typescriptlang.org', proficiency: 80 },
    { name: 'Python', Icon: SiPython, color: '#3776AB', url: 'https://www.python.org', proficiency: 85 },
    { name: 'Git', Icon: FaGitAlt, color: '#F05032', url: 'https://git-scm.com', proficiency: 88 },
    { name: 'Docker', Icon: SiDocker, color: '#2496ED', url: 'https://www.docker.com', proficiency: 75 },
    { name: 'Databases', Icon: FaDatabase, color: '#4479A1', url: 'https://www.mongodb.com', proficiency: 82 },
  ];

  const handleSkillClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <AboutContainer id="about">
      <SectionTitle>About Me</SectionTitle>
      <ProfileSection>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileImage
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Developer coding on laptop"
            effect="blur"
            placeholderSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTMwNjs7PjU1OjxKRkZKdEVDRVlZW1xSXWR2e4aBgXj/2wBDARUXFx4aHR4eHYEaHThhPWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </ImageContainer>
        <ContentContainer>
          <AboutText>
            Hi there! I'm a passionate software developer with a love for creating elegant solutions to complex problems. 
            With experience in both frontend and backend development, I enjoy building full-stack applications that make a difference.
          </AboutText>
          <AboutText>
            My journey in tech started with a curiosity for how things work, which led me to explore various programming languages and frameworks. 
            Today, I specialize in modern web technologies and continue to embrace new challenges and learning opportunities.
          </AboutText>
          <ExperienceGrid>
            <ExperienceItem
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ExperienceNumber>3+</ExperienceNumber>
              <ExperienceLabel>Years Experience</ExperienceLabel>
            </ExperienceItem>
            <ExperienceItem
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ExperienceNumber>20+</ExperienceNumber>
              <ExperienceLabel>Projects Done</ExperienceLabel>
            </ExperienceItem>
            <ExperienceItem
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ExperienceNumber>15+</ExperienceNumber>
              <ExperienceLabel>Happy Clients</ExperienceLabel>
            </ExperienceItem>
          </ExperienceGrid>
        </ContentContainer>
      </ProfileSection>

      <SkillsSection id="skills-section">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <SkillsContainer>
          {skillsData.map((skill, index) => (
            <SkillItem
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              iconColor={skill.color}
              onClick={() => handleSkillClick(skill.url)}
            >
              <skill.Icon />
              <SkillContent>
                <SkillName>{skill.name}</SkillName>
                <ProgressBarContainer>
                  <ProgressBar
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    color={skill.color}
                  />
                </ProgressBarContainer>
                <ProficiencyLabel>
                  {skill.proficiency}%
                </ProficiencyLabel>
              </SkillContent>
            </SkillItem>
          ))}
        </SkillsContainer>
      </SkillsSection>
    </AboutContainer>
  );
};

export default About;
