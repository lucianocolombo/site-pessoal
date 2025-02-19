import React, { useEffect, useState } from 'react';
import { Container, Title } from '@mantine/core';
import { fetchUsuarios } from '../api';
import UserProfileCard from '../components/UserProfileCard';

const HomePage = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const loadUsuario = async () => {
            const data = await fetchUsuarios();
            setUsuario(data[0]); // Supondo que há apenas um usuário
        };
        loadUsuario();
    }, []);

    if (!usuario) {
        return <Title>Carregando...</Title>;
    }

    return (
        <Container size="lg" py="xl">
            <Title order={2} align="center" mb="xl">
                Bem-vindo ao Meu Portfólio
            </Title>
            <UserProfileCard user={usuario} />
        </Container>
    );
};

export default HomePage;