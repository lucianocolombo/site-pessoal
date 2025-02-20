import React from 'react';
import { Title, Group, Center } from '@mantine/core';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

function ContactPage() {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            {/* Formulário de Contato */}
            <section>
                <Title order={2} mb="md">Entre em Contato</Title>
                <Center>
                    <ContactForm />
                </Center>
            </section>

            {/* Redes Sociais */}
            <section mt="xl">
                <Title order={3} mb="md">Redes Sociais</Title>
                <Group position="center">
                    <SocialLinks />
                </Group>
            </section>
        </div>
    );
}

export default ContactPage;