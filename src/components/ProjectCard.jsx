import React from 'react';
import { Card, Image, Title, Text, Button, Group } from '@mantine/core';

const ProjectCard = ({ project }) => {
    return (
        <Card shadow="sm" p="md" radius="md" withBorder>
            <Card.Section>
                <Image src={project.imagem} alt={project.titulo} height={160} fit="cover" />
            </Card.Section>
            <Title order={3} mt="md">
                {project.titulo}
            </Title>
            <Text size="sm" color="dimmed" mt="sm">
                {project.descricao}
            </Text>
            <Group mt="md">
                <Button
                    variant="outline"
                    color="blue"
                    component="a"
                    href={project.link}
                    target="_blank"
                >
                    Ver Projeto
                </Button>
            </Group>
        </Card>
    );
};

export default ProjectCard;