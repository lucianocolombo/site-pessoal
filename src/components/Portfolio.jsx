import React from 'react';
import { Container, Title, Card, Image, Text, Group, Button } from '@mantine/core';

const Portfolio = () => {
  const projects = [
    {
      title: 'Projeto A',
      image: 'project-a.jpg',
      description: 'Descrição do projeto A.',
      links: { repo: 'https://github.com/projeto-a', site: 'https://projeto-a.com' },
    },
  ];

  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="xl">
        Portfólio
      </Title>
      <Group spacing="xl">
        {projects.map((project, index) => (
          <Card key={index} shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image src={`/assets/${project.image}`} alt={project.title} height={160} />
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

export default Portfolio;