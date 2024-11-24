import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillName = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: ${props => props.theme.colors.background};
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
  border-radius: 5px;
  transition: width 1s ease-out;
`;

const skillsData = [
  { name: 'JavaScript', value: 95 },
  { name: 'React', value: 90 },
  { name: 'Git', value: 88 },
  { name: 'Node.js', value: 85 },
  { name: 'Python', value: 85 },
  { name: 'Databases', value: 82 },
  { name: 'TypeScript', value: 80 },
  { name: 'Docker', value: 75 },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <Title
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Skills
        </Title>
        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              variants={itemVariants}
            >
              <SkillName>{skill.name}</SkillName>
              <ProgressBar>
                <Progress value={skill.value} />
              </ProgressBar>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
