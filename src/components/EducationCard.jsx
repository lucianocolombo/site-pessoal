import React from 'react';
import { Card, Text, Title } from '@mantine/core';

function EducationCard({ institution, degree, period }) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Title order={4}>{institution}</Title>
            <Text weight={500}>{degree}</Text>
            <Text size="sm" color="dimmed">{period}</Text>
        </Card>
    );
}

export default EducationCard;