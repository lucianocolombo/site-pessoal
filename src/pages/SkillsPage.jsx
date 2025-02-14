// src/pages/SkillsPage.jsx
import React from 'react';
import { Container, Title, List, Paper, Text } from '@mantine/core';

const SkillsPage = () => {
  const skills = [
    { name: 'React', icon: 'react-icon.png', description: 'Biblioteca JavaScript para interfaces de usuário.' },
    { name: 'JavaScript', icon: 'js-icon.png', description: 'Linguagem de programação versátil.' },
    { name: 'Node.js', icon: 'node-icon.png', description: 'Runtime JavaScript para back-end.' },
  ];

  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="md">
        Habilidades
      </Title>
      <Paper shadow="sm" p="md" withBorder>
        <List>
          {skills.map((skill, index) => (
            <List.Item key={index}>
              <Text weight={600}>{skill.name}</Text>
              <Text size="sm" color="dimmed">{skill.description}</Text>
            </List.Item>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default SkillsPage;