import React from 'react';
import { Card, Image, Title, Text, Center } from '@mantine/core';

const UserProfileCard = ({ user }) => {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Center>
                <Image
                    src="/assets/profile.jpeg"
                    alt="Foto de Perfil"
                    width={200}
                    height={200}
                    radius="50%"
                />
            </Center>
            <Title order={3} align="center" mt="md">
                {user.nome}
            </Title>
            <Text align="center" color="dimmed" size="sm">
                {user.sobre}
            </Text>
        </Card>
    );
};

export default UserProfileCard;