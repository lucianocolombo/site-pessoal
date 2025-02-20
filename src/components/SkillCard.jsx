import React from 'react';
import { Card, Text } from '@mantine/core';

function SkillCard({ icon, title, description }) {
    return (
        <Card
            shadow="sm"
            p="xs" // Padding ainda menor
            radius="md"
            withBorder
            style={{
                backgroundColor: '#f8f9fa', // Fundo claro
                border: '1px solid #ced4da', // Borda visível
                textAlign: 'center',
                minWidth: '120px', // Largura mínima reduzida
                maxWidth: '150px', // Largura máxima para evitar que fique muito grande
            }}
        >
            {/* Ícone */}
            <Text size="lg" weight={700} mb="xs">
                {icon}
            </Text>
            {/* Título */}
            <Text weight={500} size="sm" mb="xs">
                {title}
            </Text>
            {/* Descrição */}
            <Text size="xs" color="dimmed" style={{ lineHeight: 1.2 }}>
                {description}
            </Text>
        </Card>
    );
}

export default SkillCard;