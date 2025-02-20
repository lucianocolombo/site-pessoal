import React, { useEffect, useState } from 'react';
import { fetchProjetos } from '../api';
import { Title, SimpleGrid } from '@mantine/core';
import ProjectCard from '../components/ProjectCard';

function PortfolioPage() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetchProjetos().then(setProjetos);
    }, []);

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            {/* Portfólio */}
            <section>
                <Title order={2} mb="md">Portfólio</Title>
                <SimpleGrid cols={3} spacing="lg">
                    {projetos.map((projeto, index) => (
                        <ProjectCard key={index} {...projeto} />
                    ))}
                </SimpleGrid>
            </section>
        </div>
    );
}

export default PortfolioPage;