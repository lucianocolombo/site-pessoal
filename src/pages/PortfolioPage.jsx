import React, { useEffect, useState } from 'react';
import { Container, Title, Grid, Card, Image, Text, Button, Group } from '@mantine/core';
import { fetchProjetos } from '../api';

const PortfolioPage = () => {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        const loadProjetos = async () => {
            const data = await fetchProjetos();
            setProjetos(data);
        };
        loadProjetos();
    }, []);

    if (projetos.length === 0) {
        return <Text>Carregando...</Text>;
    }

    return (
        <Container size="lg" py="xl">
            <Title order={2} mb="xl" align="center">
                Meus Projetos
            </Title>
            <Grid>
                {projetos.map((projeto) => (
                    <Grid.Col key={projeto.id} span={12} sm={6} md={4} lg={3}>
                        <Card shadow="sm" p="md" radius="md" withBorder>
                            <Card.Section>
                                <Image src={projeto.imagem} alt={projeto.titulo} height={160} fit="cover" />
                            </Card.Section>
                            <Title order={3} mt="md">
                                {projeto.titulo}
                            </Title>
                            <Text size="sm" color="dimmed" mt="sm">
                                {projeto.descricao}
                            </Text>
                            <Group mt="md">
                                <Button
                                    variant="outline"
                                    color="blue"
                                    component="a"
                                    href={projeto.link}
                                    target="_blank"
                                >
                                    Ver Projeto
                                </Button>
                            </Group>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
};

export default PortfolioPage;