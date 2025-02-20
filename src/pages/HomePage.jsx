import React, { useState, useEffect } from 'react';
import { Title, Group } from '@mantine/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfileCard from '../components/UserProfileCard';
import SkillCard from '../components/SkillCard';
import SocialLinks from '../components/SocialLinks';
import ContactForm from '../components/ContactForm';
import { fetchUsuario } from '../api';

function HomePage() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const loadUsuario = async () => {
            const data = await fetchUsuario();
            setUsuario(data);
        };
        loadUsuario();
    }, []);

    return (
        <div>
            {/* Cabeçalho */}
            <Header />

            {/* Conteúdo Principal */}
            <div style={{
                maxWidth: '1400px', // Largura máxima ajustada para telas grandes
                margin: '0 auto',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                {/* Introdução Pessoal */}
                <section style={{ width: '100%' }}>
                    <Title order={2} mb="md">Sobre Mim</Title>
                    <UserProfileCard usuario={usuario} />
                </section>

                {/* Habilidades */}
                <section mt="xl" style={{ width: '100%' }}>
                    <Title order={2} mb="md">Minhas Habilidades</Title>
                    <Group spacing="xl" position="center" style={{ flexWrap: 'wrap' }}>
                        <SkillCard icon="💻" title="Desenvolvimento Web" description="React, Node.js, Express" />
                        <SkillCard icon="📱" title="Mobile" description="React Native, Flutter" />
                        <SkillCard icon="🎨" title="Design UI/UX" description="Figma, Adobe XD" />
                        <SkillCard icon="📊" title="Análise de Dados" description="Python, Pandas, Matplotlib" />
                        <SkillCard icon="⚙️" title="DevOps" description="Docker, Kubernetes, CI/CD" />
                    </Group>
                </section>

                {/* Contato */}
                <section mt="xl" style={{ width: '100%' }}>
                    <Title order={2} mb="md">Contato</Title>
                    <Group position="center">
                        <SocialLinks />
                    </Group>
                    <ContactForm />
                </section>
            </div>

            {/* Rodapé */}
            <Footer />
        </div>
    );
}

export default HomePage;