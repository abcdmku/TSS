import type { Meta, StoryObj } from '@storybook/react';
import { CoreComponents } from './core-components';

const meta: Meta<typeof CoreComponents> = {
  component: CoreComponents,
  title: 'CoreComponents',
};
export default meta;
type Story = StoryObj<typeof CoreComponents>;

export const Primary = {
  args: {},
};
