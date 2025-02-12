import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Nome Completo</h1>
      <p>Desenvolvedor Full Stack</p>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#curriculo">Formação</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#portfolio">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;