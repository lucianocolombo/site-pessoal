import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Nome Completo</h1>
      <p>Desenvolvedor Full Stack</p>
      <nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#education">Formação</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;