import React, { useEffect, useState } from 'react';
import { fetchExperiencias, fetchEducacao } from '../api';
import { Title, SimpleGrid, Text } from '@mantine/core';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';

function ResumePage() {
    const [experiencias, setExperiencias] = useState([]);
    const [educacao, setEducacao] = useState([]);

    useEffect(() => {
        fetchExperiencias().then(setExperiencias);
        fetchEducacao().then(setEducacao);
    }, []);

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            {/* Experiências Profissionais */}
            <section>
                <Title order={2} mb="md">Experiência Profissional</Title>
                <SimpleGrid cols={2} spacing="lg">
                    {experiencias.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </SimpleGrid>
            </section>

            {/* Formação Acadêmica */}
            <section mt="xl">
                <Title order={2} mb="md">Formação Acadêmica</Title>
                <SimpleGrid cols={2} spacing="lg">
                    {educacao.map((edu, index) => (
                        <EducationCard key={index} {...edu} />
                    ))}
                </SimpleGrid>
            </section>

            {/* Download do Currículo */}
            <section mt="xl">
                <Title order={2} mb="md">Download do Currículo</Title>
                <Text>
                    <a href="/resume.pdf" download>
                        Baixar Currículo (PDF)
                    </a>
                </Text>
            </section>
        </div>
    );
}

export default ResumePage;