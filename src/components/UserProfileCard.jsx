import React from 'react';
import { Card, Image, Title, Text } from '@mantine/core';

function UserProfileCard({ usuario }) {
    if (!usuario) {
        return <Text>Carregando perfil...</Text>;
    }

    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Image src="/assets/WhatsApp.jpg" alt="Foto de Perfil" height={200} fit="contain" />
            <Title order={3} mt="md">{usuario.nome || 'Nome não disponível'}</Title>
            <Text>{usuario.sobre || 'Descrição não disponível'}</Text>
        </Card>
    );
}

export default UserProfileCard;