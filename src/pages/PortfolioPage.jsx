import React from 'react';
import { Title, SimpleGrid } from '@mantine/core';
import SkillCard from '../components/SkillCard';

function PortfolioPage() {
    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
            <Title order={1} mb="md">Portfólio</Title>
            <SimpleGrid cols={3} spacing="lg" breakpoints={[{ maxWidth: '768px', cols: 2 }, { maxWidth: '480px', cols: 1 }]}>
                <SkillCard icon="💻" title="Projeto Web" description="Descrição do projeto web." />
                <SkillCard icon="📱" title="App Mobile" description="Descrição do app mobile." />
                <SkillCard icon="🎨" title="Design UI/UX" description="Descrição do design." />
            </SimpleGrid>
        </div>
    );
}

export default PortfolioPage;