import React from 'react';
import { Card, Text, Title } from '@mantine/core';

function ExperienceCard({ company, position, period, description }) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Title order={4}>{company}</Title>
            <Text weight={500}>{position}</Text>
            <Text size="sm" color="dimmed">{period}</Text>
            <Text mt="sm">{description}</Text>
        </Card>
    );
}

export default ExperienceCard;