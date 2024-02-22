import { useEffect, useRef, useState } from 'react';

import { Button, Icon } from '@equinor/eds-core-react';
import { info_circle } from '@equinor/eds-icons';
import { Meta, StoryFn } from '@storybook/react';

import SelectField from './SelectField';
import TopBar from 'src/components/Navigation/TopBar';
import { Field } from 'src/types/Field';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1000%;
  min-width: 100%;
  > div {
    max-height: calc(100% - 64px);
    height: calc(100% - 64px);
    width: 100%;
  }
`;

const equinorFields = [
  'Gina Krog',
  'Grane',
  'Gullfaks',
  'Heidrun',
  'Johan Sverdrup',
  'Martin Linge',
  'Aasta Hansteeen',
  'Åsgard',
];

export default {
  title: 'Navigation/SelectField',
  component: SelectField,
  argTypes: {
    finishedText: { control: 'text' },
    showAccessITLink: { control: 'boolean' },
  },
  args: {
    finishedText: 'Taking you to the storybook',
    showAccessITLink: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

function generateFakeFields(): Field[] {
  const fields: Field[] = [];
  for (let i = 0; i < equinorFields.length - 1; i++) {
    fields.push({
      name: equinorFields[i],
      uuid: uuidv4(),
      country: 'Norway',
    });
  }
  return fields;
}

const getMyFields = (): Promise<Field[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateFakeFields());
    }, 1000);
  });
};

export const Primary: StoryFn = (args) => {
  const field = useRef<Field | undefined>(undefined);
  const [fields, setFields] = useState<Field[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const setField = (value: Field) => {
    field.current = value;
  };

  const onChangedField = () => {
    console.log('Changed to field: ', field.current);
    field.current = undefined;
  };

  useEffect(() => {
    const getFields = async () => {
      const fetched = await getMyFields();
      setFields(fetched);
      setIsLoading(false);
    };
    getFields();
  }, []);

  return (
    <StoryContainer>
      <TopBar
        onHeaderClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        applicationIcon="acquire"
        applicationName="App"
      >
        <TopBar.Actions>
          <Button variant="ghost_icon">
            <Icon data={info_circle} />
          </Button>
        </TopBar.Actions>
      </TopBar>
      <SelectField
        showAccessITLink={args.showAccessITLink}
        setField={setField}
        fields={fields}
        isLoading={isLoading}
        onChangedField={onChangedField}
        finishedText={args.finishedText}
      />
    </StoryContainer>
  );
};
