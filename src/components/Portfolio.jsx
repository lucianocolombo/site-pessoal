// Portfolio.jsx
import React, { useState } from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Projeto A',
      image: 'project-a.jpg',
      description: 'Descrição do projeto A.',
      links: { repo: 'https://github.com/projeto-a', site: 'https://projeto-a.com' },
    },
    // Adicionar mais projetos...
  ];

  return (
    <section id="portfolio">
      <h2>Portfólio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={`/assets/${project.image}`} alt={project.title} loading="lazy" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.links.repo} target="_blank" rel="noopener noreferrer">Repositório</a>
              <a href={project.links.site} target="_blank" rel="noopener noreferrer">Site</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;