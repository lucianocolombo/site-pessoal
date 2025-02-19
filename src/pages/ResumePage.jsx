import React, { useEffect, useState } from 'react';
import { Container, Title, List, Paper, Text } from '@mantine/core';
import { fetchExperiencias, fetchFormacao } from '../api';

const ResumePage = () => {
    const [experiencias, setExperiencias] = useState([]);
    const [formacao, setFormacao] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const expData = await fetchExperiencias();
            const formData = await fetchFormacao();
            setExperiencias(expData);
            setFormacao(formData);
        };
        loadData();
    }, []);

    return (
        <Container size="lg" py="xl">
            <Title order={2} mb="md">
                Experiência Profissional
            </Title>
            <Paper shadow="sm" p="md" withBorder>
                <List>
                    {experiencias.map((exp) => (
                        <List.Item key={exp.id}>
                            <Text weight={600}>{exp.cargo} - {exp.empresa}</Text>
                            <Text size="sm" color="dimmed">{exp.descricao}</Text>
                        </List.Item>
                    ))}
                </List>
            </Paper>

            <Title order={2} mt="xl" mb="md">
                Formação Acadêmica
            </Title>
            <Paper shadow="sm" p="md" withBorder>
                <List>
                    {formacao.map((item) => (
                        <List.Item key={item.id}>
                            <Text weight={600}>{item.instituicao} - {item.curso}</Text>
                            <Text size="sm" color="dimmed">{item.descricao}</Text>
                        </List.Item>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default ResumePage;