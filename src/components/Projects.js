import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-weight: bold;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0.5rem;
    gap: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => `linear-gradient(135deg, ${props.theme.colors.surface}, ${props.theme.colors.background})`};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.primary}15;
  width: 100%;
  
  .content {
    padding: 1.5rem;

    @media (max-width: 768px) {
      padding: 1.2rem;
    }
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid ${props => props.theme.colors.primary}15;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
`;

const TechStack = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`;

const TechBadge = styled(motion.span)`
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const LinkButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid transparent;
  cursor: pointer;
  width: fit-content;

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    width: 100%;
  }

  &:hover {
    background: transparent;
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with real-time data visualization, custom reporting, and multi-platform integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      tech: ["React", "D3.js", "Node.js", "Socket.io"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const techBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <ProjectsContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="projects"
    >
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={cardVariants}
            whileHover="hover"
          >
            <ProjectImage
              src={project.image}
              alt={project.title}
              variants={imageVariants}
            />
            <div className="content">
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, index) => (
                  <TechBadge
                    key={index}
                    variants={techBadgeVariants}
                  >
                    {tech}
                  </TechBadge>
                ))}
              </TechStack>
              <ButtonGroup>
                <LinkButton
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Live Demo
                </LinkButton>
                <LinkButton
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  GitHub
                </LinkButton>
              </ButtonGroup>
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
