import React, { useState } from 'react';
import { Container, Title, TextInput, Textarea, Button, Center, Notification } from '@mantine/core';
import { useForm } from '@mantine/form';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: {
            name: (value) => (value.trim().length < 2 ? 'Nome muito curto' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
            message: (value) => (value.trim().length < 10 ? 'Mensagem muito curta' : null),
        },
    });

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Limpa a notificação após 3 segundos
    };

    return (
        <Container size="sm" py="xl">
            <Title order={2} align="center" mb="xl">
                Entre em Contato
            </Title>
            {submitted && (
                <Notification title="Mensagem enviada!" color="green" onClose={() => setSubmitted(false)}>
                    Sua mensagem foi enviada com sucesso!
                </Notification>
            )}
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    label="Nome"
                    placeholder="Seu nome"
                    {...form.getInputProps('name')}
                    mb="sm"
                />
                <TextInput
                    label="Email"
                    placeholder="seuemail@example.com"
                    {...form.getInputProps('email')}
                    mb="sm"
                />
                <Textarea
                    label="Mensagem"
                    placeholder="Escreva sua mensagem aqui..."
                    {...form.getInputProps('message')}
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