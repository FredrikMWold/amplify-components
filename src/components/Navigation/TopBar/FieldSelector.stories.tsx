import { useState } from 'react';

import { faker } from '@faker-js/faker';
import { Meta, StoryFn } from '@storybook/react';

import { Field } from '../../../types/Field';
import FieldSelector from './FieldSelector';
const fields = new Array(10).fill(0).map(() => FakeField());

export default {
  title: 'Navigation/TopBar/FieldSelector',
  component: FieldSelector,
  argTypes: {
    showAccessITLink: { control: 'boolean' },
    placement: {
      control: 'select',
      options: ['bottom-start', 'bottom', 'bottom-end'],
    },
  },
  args: { showAccessITLink: true, placement: 'bottom-start' },
} as Meta;

function FakeField() {
  return {
    name: faker.lorem.word(),
    uuid: faker.datatype.uuid(),
    country: faker.address.country(),
  };
}

export const Primary: StoryFn = (args) => {
  const [field, setField] = useState<Field>(fields[0]);
  return (
    <FieldSelector
      availableFields={fields}
      currentField={field}
      onSelect={(selectedField: Field) => setField(selectedField)}
      showAccessITLink={args.showAccessITLink}
    />
  );
};
