import React from 'react';
import { TextInput, Textarea, Button, Group } from '@mantine/core';

function ContactForm() {
    return (
        <form>
            <TextInput label="Nome" placeholder="Seu nome" required />
            <TextInput label="Email" placeholder="seuemail@example.com" required mt="md" />
            <Textarea label="Mensagem" placeholder="Sua mensagem" required mt="md" />
            <Group position="right" mt="md">
                <Button type="submit">Enviar</Button>
            </Group>
        </form>
    );
}

export default ContactForm;