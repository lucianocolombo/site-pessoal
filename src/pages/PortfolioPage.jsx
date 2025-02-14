// src/pages/PortfolioPage.jsx
import React from 'react';
import { Container, Title, Card, Image, Text, Group, Button } from '@mantine/core';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Projeto A',
      image: '/assets/project-a.jpg',
      description: 'Uma descrição breve sobre o Projeto A.',
      links: {
        repo: 'https://github.com/projeto-a',
        site: 'https://projeto-a.com',
      },
    },
    {
      title: 'Projeto B',
      image: '/assets/project-b.jpg',
      description: 'Uma descrição breve sobre o Projeto B.',
      links: {
        repo: 'https://github.com/projeto-b',
        site: 'https://projeto-b.com',
      },
    },
  ];

  return (
    <Container size="lg" py="xl">
      <Title order={2} align="center" mb="xl">
        Meus Projetos
      </Title>
      <Group spacing="xl" grow>
        {projects.map((project, index) => (
          <Card key={index} shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image src={project.image} alt={project.title} height={160} fit="cover" />
            </Card.Section>
            <Title order={3} mt="md">
              {project.title}
            </Title>
            <Text size="sm" color="dimmed" mt="sm">
              {project.description}
            </Text>
            <Group mt="md">
              <Button
                variant="outline"
                color="blue"
                component="a"
                href={project.links.repo}
                target="_blank"
              >
                Repositório
              </Button>
              <Button
                variant="outline"
                color="blue"
                component="a"
                href={project.links.site}
                target="_blank"
              >
                Site
              </Button>
            </Group>
          </Card>
        ))}
      </Group>
    </Container>
  );
};

export default PortfolioPage;