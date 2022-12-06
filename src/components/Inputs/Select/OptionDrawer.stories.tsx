import { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import OptionDrawer, { OptionDrawerProps } from './OptionDrawer';
import { items, ValueType } from './SelectUtils';

export default {
  title: 'Inputs/Select/OptionDrawer',
  component: OptionDrawer,
  argTypes: {
    animateCheck: {
      control: 'boolean',
    },
    animateUncheck: {
      control: 'boolean',
    },
    animateParent: {
      control: 'boolean',
    },
  },
  args: {
    animateCheck: false,
    animateUncheck: false,
    animateParent: false,
  },
} as Meta;

export const Primary: Story<OptionDrawerProps<ValueType>> = (args) => {
  const [selectedItems, setSelectedItems] = useState<ValueType[]>([]);

  return (
    <div style={{ width: '300px' }}>
      {items.map((item) => (
        <OptionDrawer
          key={item.id}
          onToggle={(e) => {
            e.items.forEach((item) => {
              setSelectedItems((s) =>
                e.toggle ? [...s, item] : [...s.filter((val) => val !== item)]
              );
            });
          }}
          item={item}
          selectedItems={selectedItems}
          animateCheck={args.animateCheck}
          animateParent={args.animateParent}
          animateUncheck={args.animateUncheck}
        />
      ))}
    </div>
  );
};
