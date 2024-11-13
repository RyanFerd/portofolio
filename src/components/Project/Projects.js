import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "TECNOPOLIS",
      description: "A web and mobile based smart city application. This application was created to help simplify the licensing application process including establishment or operation, especially in the education sector.",
      image: require('../Image/project1.png'),
      technologies: ["Flutter", "PHP", "MySQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "GETCAFESBY",
      description: "A static website that is useful for making it easier for people, especially young people, to find information about coffee shops & co-working spaces that are comfortable and suitable for carrying out all activities such as working or doing assignments, and of course the cafe that we recommend is the best and most comfortable cafe and with good facilities and service.",
      image: require('../Image/project2.png'),
      technologies: ["HTML", "CSS"],
      liveLink: "https://getcafesby.netlify.app/",
      githubLink: "#"
    },
    {
      title: "DREAM BAKERY",
      description: "Dream Bakery is a website-based online shop that sells various types of pastries. Dream Bakery was designed with the aim of making it easier for customers to choose and order pastries anywhere and anytime.",
      image: require('../Image/project3.png'),
      technologies: ["PHP", "CSS", "MySQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "DAFTAR TUGASKU APP",
      description: "Using Flutter as a development framework and SQFLite as a local database management system, the “My To Do List” app successfully provides a responsive and consistent user experience across multiple platforms. Features such as efficient task management, SQFLite integration for continuous offline functionality, and an intuitive and detailed user interface, provide a solution that meets user needs in to-do note management.",
      image: require('../Image/project4.png'),
      technologies: ["DART"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Aplikasi Verifikasi Calon Wisudawan",
      description: "Aplikasi ini berguna untuk membandingkan data mahasiswa yang akan diwisuda oleh PTS dengan data yang ada dalam PDDIKTI. Dokumen ini juga dibuat sebagai tolak ukur dan panduan untuk detail dari spesifikasi kebutuhan yang diperlukan dari software yang akan dibuat.",
      image: require('../Image/project5.png'),
      technologies: ["JavaScript","CSS", "MySQL"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;