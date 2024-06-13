import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Navbar from './Navbar';
import React from 'react';

interface argTypesProps {
    backgroundColor: string
}

const meta: Meta = {
  title: 'widget/Navbar',
  component: Navbar,
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

export const Normal: Story = {
  args: {
    primary: true,
  },
};
export const Block: Story = {
    args: {
      primary: true,
      theme: 'nav__dark'
    },
  };


