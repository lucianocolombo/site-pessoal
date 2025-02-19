import React from 'react';
import { Timeline, Text } from '@mantine/core';

const ExperienceTimeline = ({ experiences }) => {
    return (
        <Timeline active={experiences.length - 1} bulletSize={24} lineWidth={2}>
            {experiences.map((exp) => (
                <Timeline.Item
                    key={exp.id}
                    title={`${exp.cargo} - ${exp.empresa}`}
                    bullet={<Text>{new Date(exp.inicio).getFullYear()}</Text>}
                >
                    <Text color="dimmed" size="sm">
                        {exp.descricao}
                    </Text>
                </Timeline.Item>
            ))}
        </Timeline>
    );
};

export default ExperienceTimeline;