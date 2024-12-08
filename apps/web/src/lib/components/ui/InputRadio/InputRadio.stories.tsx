import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InputRadio } from './InputRadio';

const meta = {
	title: 'UI/InputRadio',
	component: InputRadio,
} satisfies Meta<typeof InputRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		labelText: 'похудение',
	},
	render: (args) => <InputRadio {...args} />,
};
