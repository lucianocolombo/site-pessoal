import React from 'react';
import { Group, NavLink, Burger, Menu } from '@mantine/core';
import { useState } from 'react';

function Header() {
    const [opened, setOpened] = useState(false); // Estado para controlar o menu mobile

    return (
        <header style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
            {/* Container Principal */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                {/* Logo */}
                <NavLink href="/" label="Luciano Colombo" />

                {/* Menu Desktop */}
                <Group spacing="md" ml="auto" className="desktop-menu">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/resume" label="Currículo" />
                    <NavLink href="/portfolio" label="Portfólio" />
                    <NavLink href="/contact" label="Contato" />
                </Group>

                {/* Ícone de Hambúrguer (Menu Mobile) */}
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    className="mobile-menu"
                />
            </div>

            {/* Menu Dropdown Mobile */}
            <Menu
                opened={opened}
                onClose={() => setOpened(false)}
                position="bottom"
                placement="end"
                className="mobile-menu"
            >
                <Menu.Item component="a" href="/">Home</Menu.Item>
                <Menu.Item component="a" href="/resume">Currículo</Menu.Item>
                <Menu.Item component="a" href="/portfolio">Portfólio</Menu.Item>
                <Menu.Item component="a" href="/contact">Contato</Menu.Item>
            </Menu>
        </header>
    );
}

export default Header;