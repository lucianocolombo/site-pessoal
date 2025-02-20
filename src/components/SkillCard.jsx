import React from 'react';
import { Card, Text, Group } from '@mantine/core';

function SkillCard({ icon, title, description }) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart">
                <Text weight={700}>{icon}</Text>
                <Text>{title}</Text>
            </Group>
            <Text size="sm" color="dimmed" mt="sm">{description}</Text>
        </Card>
    );
}

export default SkillCard;