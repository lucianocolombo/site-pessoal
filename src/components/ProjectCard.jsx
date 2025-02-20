import React from 'react';
import { Card, Image, Title, Text, Button, Group } from '@mantine/core';

function ProjectCard({ title, description, image, links }) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image src={`/assets/${image}`} alt={title} height={160} fit="contain" />
            </Card.Section>
            <Title order={4} mt="md">
                {title}
            </Title>
            <Text size="sm" color="dimmed" mt="sm">
                {description}
            </Text>
            <Group mt="md">
                {links.website && (
                    <Button component="a" href={links.website} target="_blank" variant="light">
                        Website
                    </Button>
                )}
                {links.repository && (
                    <Button component="a" href={links.repository} target="_blank" variant="light">
                        Repositório
                    </Button>
                )}
                {links.pdf && (
                    <Button component="a" href={links.pdf} target="_blank" variant="light">
                        PDF
                    </Button>
                )}
            </Group>
        </Card>
    );
}

export default ProjectCard;