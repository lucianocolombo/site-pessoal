import React from 'react';
import { Text, Group, Anchor } from '@mantine/core';

function Footer() {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa' }}>
            <Group spacing="xs" position="center">
                <Anchor href="/">Home</Anchor>
                <Anchor href="/resume">Currículo</Anchor>
                <Anchor href="/portfolio">Portfólio</Anchor>
                <Anchor href="/contact">Contato</Anchor>
            </Group>
            <Text size="sm">© 2025 Luciano Colombo. Todos os direitos reservados.</Text>
        </footer>
    );
}

export default Footer;