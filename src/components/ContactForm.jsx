import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Textarea, Button, Notification } from '@mantine/core';

const ContactForm = () => {
    const [submitted, setSubmitted] = React.useState(false);

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
        <>
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
                <Button type="submit" color="blue" fullWidth>
                    Enviar Mensagem
                </Button>
            </form>
        </>
    );
};

export default ContactForm;