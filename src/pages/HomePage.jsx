import React, { useState, useEffect } from 'react';
import { Title, SimpleGrid, Group } from '@mantine/core';
import { fetchUsuario } from '../api';
import UserProfileCard from '../components/UserProfileCard';
import SkillCard from '../components/SkillCard';
import SocialLinks from '../components/SocialLinks';
import ContactForm from '../components/ContactForm';

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
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            {/* Introdução Pessoal */}
            <section>
                <Title order={2} mb="md">Sobre Mim</Title>
                <UserProfileCard usuario={usuario} />
            </section>

            {/* Habilidades */}
            <section mt="xl">
                <Title order={2} mb="md">Minhas Habilidades</Title>
                <SimpleGrid cols={3} spacing="lg">
                    <SkillCard icon="💻" title="Desenvolvimento Web" description="React, Node.js, Express" />
                    <SkillCard icon="📱" title="Mobile" description="React Native, Flutter" />
                    <SkillCard icon="🎨" title="Design UI/UX" description="Figma, Adobe XD" />
                </SimpleGrid>
            </section>

            {/* Contato */}
            <section mt="xl">
                <Title order={2} mb="md">Contato</Title>
                <Group position="center">
                    <SocialLinks />
                </Group>
                <ContactForm />
            </section>
        </div>
    );
}

export default HomePage;