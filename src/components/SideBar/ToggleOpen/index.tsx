import React from 'react';
import { Button, Icon, Tooltip, Typography } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { first_page, last_page } from '@equinor/eds-icons';
import styled from 'styled-components';

const { colors, spacings, shape } = tokens;
interface ContainerProps {
  open?: boolean;
}

const ToggleContainer = styled.div<ContainerProps>`
  display: ${(props) => (props.open ? 'grid' : 'flex')};
  grid-template-columns: repeat(10, 1fr);
  grid-gap: ${spacings.comfortable.medium};
  justify-content: center;
  margin-top: auto;
  margin-bottom: ${spacings.comfortable.medium};
  ${(props) =>
    !props.open &&
    `
    > button {
      margin-left: -4px;
    }
  `}
`;

const LargeButton = styled.button`
  grid-column: 2 / 10;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${spacings.comfortable.medium};
  align-items: center;
  background: none;
  border: none;
  border-radius: ${shape.button.borderRadius};
  padding: ${spacings.comfortable.medium_small};
  margin-left: -${spacings.comfortable.medium};
  margin-right: -${spacings.comfortable.medium};
  > p {
    grid-column: 2;
    margin-left: -1px; // border size
  }
  &:hover {
    cursor: pointer;
    background: ${colors.interactive.secondary__highlight.hex};
  }
`;

const Text = styled(Typography)`
  font-weight: 400;
`;

interface ToggleOpenProps {
  isOpen: boolean;
  toggle: () => void;
}

const ToggleOpen: React.FC<ToggleOpenProps> = ({ isOpen, toggle }) => {
  if (isOpen) {
    return (
      <ToggleContainer open={isOpen}>
        <LargeButton onClick={toggle}>
          <Icon
            size={24}
            data={first_page}
            color={colors.text.static_icons__default.hex}
          />
          <Text variant="cell_text" group="table">
            Collapse
          </Text>
        </LargeButton>
      </ToggleContainer>
    );
  }
  return (
    <ToggleContainer open={isOpen}>
      <Tooltip title="Expand" placement="right">
        <Button onClick={toggle} color="secondary" variant="ghost_icon">
          <Icon
            size={24}
            data={last_page}
            color={colors.text.static_icons__default.hex}
          />
        </Button>
      </Tooltip>
    </ToggleContainer>
  );
};

export default ToggleOpen;
