import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './MainBtn';
import React from 'react';
interface argTypesProps {
    backgroundColor: string
}

const meta: Meta = {
  title: 'shared/MainBtn',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }, // Добавлено здесь
  },
  args: { onClick: fn() },
};

export default meta;

interface Story extends StoryObj<typeof meta> {
  args: {
    primary?: boolean;
    label?: string;
    size?: 'small' | 'large';
    theme?: string
  };
}

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Clear: Story = {
    args: {
      theme: 'clear',
      label: 'Button',
    },
  };
  export const borderLine: Story = {
    args: {
      theme: 'black',
      label: 'Button',
    },
  };
