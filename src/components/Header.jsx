import React from 'react';
import { NavLink, Group } from '@mantine/core';

function Header() {
    return (
        <header style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
            <Group position="apart" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div>
                    <NavLink href="/" label="Luciano Colombo" />
                </div>
                <Group spacing="md">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/resume" label="Currículo" />
                    <NavLink href="/portfolio" label="Portfólio" />
                    <NavLink href="/contact" label="Contato" />
                </Group>
            </Group>
        </header>
    );
}

export default Header;