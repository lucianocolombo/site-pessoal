// src/components/SkillCard.jsx
import React from 'react';
import { Card, Text, Badge } from '@mantine/core';

const SkillCard = ({ skill }) => {
    return (
        <Card shadow="sm" p="md" radius="md" withBorder>
            <Text weight={600}>{skill.nome}</Text>
            <Badge color="blue" mt="sm">
                {skill.nivel}
            </Badge>
        </Card>
    );
};

export default SkillCard;