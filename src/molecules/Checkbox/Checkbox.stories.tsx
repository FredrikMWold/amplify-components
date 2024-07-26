import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Molecules/Selection Controls/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { action: 'onChange' },
  },
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fk8AI59x5HqPCBg4Nemlkl/%F0%9F%92%A0-Component-Library---Amplify?node-id=4202-107640&m=dev',
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Toyota',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Toyota',
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    label: 'Toyota',
    outlined: true,
  },
};
export const DisabledOutlined: Story = {
  args: {
    label: 'Toyota',
    outlined: true,
    disabled: true,
  },
};
