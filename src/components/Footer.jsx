import React from 'react';
import { Group, Anchor, Text } from '@mantine/core';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f4f4f4', padding: '20px', textAlign: 'center' }}>
      <Group position="center" spacing="xs">
        <Anchor href="https://www.linkedin.com/in/luciano-rogerio-colombo-sousa-28068820b/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Anchor>
        <div>
        <Anchor href="https://github.com/lucianocolombo" target="_blank" rel="noopener noreferrer">
          GitHub
        </Anchor>
        </div>
      </Group>
      <Text size="sm" color="dimmed" mt="sm">
        © 2025 Luciano Rogério Colombo. Todos os direitos reservados.
      </Text>
    </footer>
  );
};

export default Footer;