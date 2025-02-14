import React from 'react';

const Home = () => {
  const skills = [
    { name: 'React', icon: 'react-icon.png', description: 'Biblioteca JavaScript para interfaces de usuário.' },
    { name: 'JavaScript', icon: 'js-icon.png', description: 'Linguagem de programação versátil.' },
    // Adicionar mais habilidades...
  ];

  return (
    <div>
      <section id="introduction">
        <img src="/assets/profile.jpg" alt="Foto de Perfil" />
        <h1>Luciano Rogério Colombo Sousa</h1>
        <p>Desenvolvedor Full Stack apaixonado por tecnologia.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/luciano-rogerio-colombo-sousa-28068820b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/lucianocolombo" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>

      <section id="skills">
        <h2>Habilidades</h2>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={`/assets/${skill.icon}`} alt={skill.name} />
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;