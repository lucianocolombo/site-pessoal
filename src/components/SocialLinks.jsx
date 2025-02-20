import React from 'react';
import { Anchor, Group } from '@mantine/core';

function SocialLinks() {
    return (
        <Group spacing="xs">
            <div><Anchor href="https://github.com/lucianocolombo" target="_blank">GitHub</Anchor></div>
            <div><Anchor href="https://www.linkedin.com/in/luciano-rogerio-colombo-sousa-28068820b/" target="_blank">LinkedIn</Anchor></div>
        </Group>
    );
}

export default SocialLinks;