import React from 'react';
import { Container, Title, Text, Image, Button, Center } from '@mantine/core';

const HomePage = () => {
  return (
    <Container size="lg" py="xl">
      <Center>
        <Image
          src="/assets/profile.jpg"
          alt="Foto de Perfil"
          width={200}
          height={200}
          radius="50%"
          mx="auto"
        />
      </Center>
      <Title order={1} align="center" mt="xl">
        Luciano Rogério Colombo Sousa
      </Title>
      <Text align="center" mt="sm" color="dimmed">
        Desenvolvedor Full Stack apaixonado por tecnologia.
      </Text>
      <Center mt="xl">
        <Button variant="outline" color="blue" radius="md" size="md">
          Entre em Contato
        </Button>
      </Center>
    </Container>
  );
};

export default HomePage;