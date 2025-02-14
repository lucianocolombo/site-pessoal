import React from 'react';
import { Container, Title, List, Paper, Text } from '@mantine/core';

const ResumePage = () => {
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
    <Container size="lg" py="xl">
      <Title order={2} mb="md">
        Experiência Profissional
      </Title>
      <Paper shadow="sm" p="md" withBorder>
        <List>
          {professionalExperience.map((exp, index) => (
            <List.Item key={index}>
              <Text weight={600}>{exp.company} - {exp.role} ({exp.period})</Text>
              <List>
                {exp.responsibilities.map((resp, idx) => (
                  <List.Item key={idx}>{resp}</List.Item>
                ))}
              </List>
            </List.Item>
          ))}
        </List>
      </Paper>

      <Title order={2} mt="xl" mb="md">
        Educação
      </Title>
      <Paper shadow="sm" p="md" withBorder>
        <List>
          {academicEducation.map((edu, index) => (
            <List.Item key={index}>
              <Text weight={600}>{edu.institution} - {edu.course} ({edu.year})</Text>
            </List.Item>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ResumePage;