import React from 'react';

const Resume = () => {
  const professionalExperience = [
    {
      company: 'Empresa ABC',
      role: 'Desenvolvedor Frontend',
      period: 'Jan 2020 - Dez 2022',
      responsibilities: ['Desenvolvimento de interfaces responsivas.', 'Integração com APIs REST.'],
    },
  ];

  const academicEducation = [
    { institution: 'Universidade XYZ', course: 'Ciência da Computação', year: '2018-2022' },
  ];

  return (
    <section id="resume">
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

      <h2>Educação</h2>
      <ul>
        {academicEducation.map((edu, index) => (
          <li key={index}>
            <strong>{edu.institution}</strong> - {edu.course} ({edu.year})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;