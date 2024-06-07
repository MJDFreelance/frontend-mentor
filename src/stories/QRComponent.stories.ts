import type { Meta, StoryObj } from '@storybook/react';
import QRComponent from "@/components/molecules/QRComponent/QRComponent";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Frontend Mentor/QR',

  component: QRComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'lightgray', // Default background for this story
      values: [
        { name: 'lightgray', value: 'hsl(212, 45%, 89%)' },
        { name: 'dark', value: '#333333' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof QRComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {

};
