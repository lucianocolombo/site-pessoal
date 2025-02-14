// src/components/Header.jsx
import React from 'react';
import { Anchor, Group, Container, Burger, Drawer, Box } from '@mantine/core';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header Principal */}
      <Container size="lg" style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
        <Anchor component={Link} to="/" weight={700} size="xl" underline={false}>
          Nome Completo
        </Anchor>

        {/* Links para Desktop */}
        <Group ml="auto" spacing="xs" sx={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' } }}>
          <Anchor
            component={Link}
            to="/"
            underline={false}
            color={isActive('/') ? 'blue' : 'dark'}
          >
            Sobre
          </Anchor>
          <Anchor
            component={Link}
            to="/resume"
            underline={false}
            color={isActive('/resume') ? 'blue' : 'dark'}
          >
            Formação
          </Anchor>
          <Anchor
            component={Link}
            to="/skills"
            underline={false}
            color={isActive('/skills') ? 'blue' : 'dark'}
          >
            Habilidades
          </Anchor>
          <Anchor
            component={Link}
            to="/portfolio"
            underline={false}
            color={isActive('/portfolio') ? 'blue' : 'dark'}
          >
            Projetos
          </Anchor>
          <Anchor
            component={Link}
            to="/contact"
            underline={false}
            color={isActive('/contact') ? 'blue' : 'dark'}
          >
            Contato
          </Anchor>
        </Group>

        {/* Ícone de Menu para Mobile */}
        <Burger
          opened={drawerOpened}
          onClick={() => setDrawerOpened((o) => !o)}
          size="sm"
          ml="auto"
          sx={{ display: 'block', '@media (min-width: 768px)': { display: 'none' } }}
        />
      </Container>

      {/* Menu Drawer para Mobile */}
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Menu"
        padding="md"
        size="sm"
      >
        <Box>
          <Anchor
            component={Link}
            to="/"
            underline={false}
            color={isActive('/') ? 'blue' : 'dark'}
            block
            mb="sm"
          >
            Sobre
          </Anchor>
          <Anchor
            component={Link}
            to="/resume"
            underline={false}
            color={isActive('/resume') ? 'blue' : 'dark'}
            block
            mb="sm"
          >
            Formação
          </Anchor>
          <Anchor
            component={Link}
            to="/skills"
            underline={false}
            color={isActive('/skills') ? 'blue' : 'dark'}
            block
            mb="sm"
          >
            Habilidades
          </Anchor>
          <Anchor
            component={Link}
            to="/portfolio"
            underline={false}
            color={isActive('/portfolio') ? 'blue' : 'dark'}
            block
            mb="sm"
          >
            Projetos
          </Anchor>
          <Anchor
            component={Link}
            to="/contact"
            underline={false}
            color={isActive('/contact') ? 'blue' : 'dark'}
            block
          >
            Contato
          </Anchor>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;