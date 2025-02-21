import React from 'react';
import { Group, Menu, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Menu */}
                <Group spacing="md">
                    {/* Link Home */}
                    <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link>

                    {/* Dropdown para Currículo */}
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <span style={{ cursor: 'pointer', color: '#007bff' }}>Currículo</span>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item component={Link} to="/resume/experiencia">Experiência</Menu.Item>
                            <Menu.Item component={Link} to="/resume/educacao">Educação</Menu.Item>
                            <Menu.Item component={Link} to="/resume/certificacoes">Certificações</Menu.Item>
                            {/* Botão para Currículo Lattes */}
                            <Menu.Item>
                                <Button
                                    component="a"
                                    href="http://lattes.cnpq.br/3432032768023676"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="light"
                                    color="blue"
                                    fullWidth
                                    style={{ marginTop: '0.5rem' }}
                                >
                                    Currículo Lattes
                                </Button>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                    {/* Dropdown para Portfólio */}
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <span style={{ cursor: 'pointer', color: '#007bff' }}>Portfólio</span>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item component={Link} to="/portfolio/projetos-web">Projetos Web</Menu.Item>
                            <Menu.Item component={Link} to="/portfolio/apps-mobile">Apps Mobile</Menu.Item>
                            <Menu.Item component={Link} to="/portfolio/design-ux">Design UI/UX</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                    {/* Link Contato */}
                    <Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contato</Link>
                </Group>
            </div>
        </header>
    );
}

export default Header;