// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Container, Title, TextInput, Textarea, Button, Center } from '@mantine/core';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container size="sm" py="xl">
      <Title order={2} align="center" mb="xl">
        Entre em Contato
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Nome"
          placeholder="Seu nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          mb="sm"
        />
        <TextInput
          label="Email"
          placeholder="seuemail@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          mb="sm"
        />
        <Textarea
          label="Mensagem"
          placeholder="Escreva sua mensagem aqui..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          mb="md"
        />
        <Center>
          <Button type="submit" color="blue" radius="md">
            Enviar Mensagem
          </Button>
        </Center>
      </form>
    </Container>
  );
};

export default ContactPage;