import { FC, useRef, useState } from 'react';

import { tokens } from '@equinor/eds-tokens';

import ChangingField from 'src/components/Navigation/SelectField/ChangingField';
import Illustration from 'src/components/Navigation/SelectField/Illustration';
import SelectorCard from 'src/components/Navigation/SelectField/SelectorCard/SelectorCard';
import SelectorSkeleton from 'src/components/Navigation/SelectField/SelectorCard/Skeleton';
import VisualWaves from 'src/components/Visuals/Waves/VisualWaves';
import { Field } from 'src/types/Field';

import styled from 'styled-components';

const { colors } = tokens;
const ImageWrapper = styled.div`
  margin-top: auto;
  > svg {
    margin-bottom: -10px;
    background-color: ${colors.ui.background__light.rgba};
  }
`;

const Container = styled.div`
  background-color: ${colors.ui.background__light.rgba};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  max-height: calc(100vh - 64px);
  width: 100vw;
`;

export interface SelectFieldProps {
  setField: (value: Field) => void;
  fields: Field[];
  isLoading?: boolean;
  onChangedField: () => void;
  showAccessITLink?: boolean;
  finishedText: string; // Example: 'Taking you to the dashboard'
}

const SelectField: FC<SelectFieldProps> = ({
  setField,
  fields,
  isLoading,
  onChangedField,
  finishedText,
  showAccessITLink = true,
}) => {
  const [isChangingField, setIsChangingField] = useState(false);
  const fieldName = useRef<string>('');

  const handleClick = (field: Field) => {
    // Only field_identifier and field_guid are necessary for it to work
    // Some fields coming from the backend have country: null
    if (field.name && field.uuid) {
      setField({
        uuid: field.uuid,
        name: field.name,
        country: field.country ?? '',
      });
      fieldName.current = field.name;
      setIsChangingField(true);
    }
  };

  if (isChangingField) {
    return (
      <ChangingField
        fieldName={fieldName.current}
        onChangedField={onChangedField}
        finishedText={finishedText}
      />
    );
  }

  return (
    <Container className="select-field">
      <ImageWrapper>
        <VisualWaves />
      </ImageWrapper>
      {!isLoading ? (
        <SelectorCard
          availableFields={fields}
          onSelect={handleClick}
          showAccessITLink={showAccessITLink}
        />
      ) : (
        <SelectorSkeleton />
      )}
    </Container>
  );
};

export default SelectField;
