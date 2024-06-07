import type { Meta, StoryObj } from '@storybook/react';
import Oval from "@assets/images/backgrounds/oval.svg";

// Storybook metadata and component configuration
const meta = {
    title: 'Test/Oval',
    component: Oval,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Oval>;

export default meta;

type Story = StoryObj<typeof meta>;

// Primary story configuration
export const Primary: Story = {
    args: {},
};
