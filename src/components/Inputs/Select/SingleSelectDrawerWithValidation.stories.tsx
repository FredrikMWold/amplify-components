import { FormProvider, useForm } from 'react-hook-form';
import { Meta, Story } from '@storybook/react';
import SingleSelectDrawerWithValidation, {
  SingleSelectDrawerWithValidationProps,
} from './SingleSelectDrawerWithValidation';
import { ValueType, items } from './SelectUtils';

import { SelectItem } from '.';
import { Typography } from '@equinor/eds-core-react';
import { useState } from 'react';

export default {
  title: 'Input/Select/SingleSelectDrawerWithValidation',
  component: SingleSelectDrawerWithValidation,
} as Meta;

const initialItem = items.find((item) => item.id === '22');

const Template: Story<
  SingleSelectDrawerWithValidationProps<ValueType>
> = () => {
  const [selectedItem, setSelectedItem] = useState<
    SelectItem<ValueType> | undefined
  >(undefined);

  const methods = useForm({ reValidateMode: 'onChange', mode: 'onChange' });

  return (
    <FormProvider {...methods}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            width: '300px',
          }}
        >
          <SingleSelectDrawerWithValidation
            id="test"
            items={items}
            label="Test"
            placeholder="Select..."
            rules={{ required: true }}
            onChange={(item) => setSelectedItem(item as any)}
            initialItem={initialItem}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h3">{selectedItem?.label}</Typography>
        </div>
      </div>
    </FormProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};