// Resume.jsx
import React from 'react';

const Resume = () => {
  const professionalExperience = [
    {
      company: 'Empresa ABC',
      role: 'Desenvolvedor Frontend',
      period: 'Jan 2020 - Dez 2022',
      responsibilities: ['Desenvolvimento de interfaces responsivas.', 'Integração com APIs REST.'],
    },
    // Adicionar mais experiências...
  ];

  const academicEducation = [
    { institution: 'Universidade XYZ', course: 'Ciência da Computação', year: '2018-2022' },
    { institution: 'Curso Online ABC', course: 'Desenvolvimento Web', year: '2021' },
  ];

  return (
    <div>
      <section id="professional-experience">
        <h2>Experiência Profissional</h2>
        <ul>
          {professionalExperience.map((exp, index) => (
            <li key={index}>
              <strong>{exp.company}</strong> - {exp.role} ({exp.period})
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section id="academic-education">
        <h2>Educação</h2>
        <ul>
          {academicEducation.map((edu, index) => (
            <li key={index}>
              <strong>{edu.institution}</strong> - {edu.course} ({edu.year})
            </li>
          ))}
        </ul>
      </section>

      <section id="resume-download">
        <a href="/assets/curriculo.pdf" download>Baixar Currículo</a>
      </section>
    </div>
  );
};

export default Resume;