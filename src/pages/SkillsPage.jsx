import React, { useEffect, useState } from 'react';
import { Container, Grid, Title } from '@mantine/core';
import { fetchHabilidades } from '../api';
import SkillCard from '../components/SkillCard';

const SkillsPage = () => {
    const [habilidades, setHabilidades] = useState([]);

    useEffect(() => {
        const loadHabilidades = async () => {
            const data = await fetchHabilidades();
            setHabilidades(data);
        };
        loadHabilidades();
    }, []);

    if (habilidades.length === 0) {
        return <Title>Carregando...</Title>;
    }

    return (
        <Container size="lg" py="xl">
            <Title order={2} align="center" mb="xl">
                Minhas Habilidades
            </Title>
            <Grid>
                {habilidades.map((habilidade) => (
                    <Grid.Col key={habilidade.id} span={6} md={4} lg={3}>
                        <SkillCard skill={habilidade} />
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
};

export default SkillsPage;