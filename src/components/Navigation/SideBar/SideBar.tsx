import React, { ReactNode, forwardRef, useContext, useState } from 'react';

import CreateItem from './CreateItem';
import EquinorLogo from '../../Icons/EquinorLogo';
import ToggleOpen from './ToggleOpen';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';

const { colors, spacings } = tokens;
interface ContainerProps {
  width: string;
  maxHeight?: string;
}

const Container = styled.div<ContainerProps>`
  border-right: 1px solid ${colors.ui.background__medium.hsla};
  background-color: ${colors.ui.background__default.hsla};
  display: flex;
  flex-direction: column;
  padding-bottom: ${spacings.comfortable.large};
  overflow: hidden;
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  ${(props) => props.maxHeight && `max-height: ${props.maxHeight}`};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${colors.ui.background__medium.hex};
  padding-top: ${spacings.comfortable.large};
`;

const TopContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  align-items: center;
`;

interface SideBarContextType {
  isOpen: boolean;
}

export function useSideBar() {
  const context = useContext(SideBarContext);
  if (context === undefined) {
    throw new Error('Sidebar hook must be used within Provider');
  }
  return context;
}

export const SideBarContext = React.createContext<
  SideBarContextType | undefined
>(undefined);

type SidebarType = {
  onCreate?: () => void;
  createLabel?: string;
  createDisabled?: boolean;
  open?: boolean;
  maxHeight?: string;
  onToggle?: (state: boolean) => void;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const SideBar = forwardRef<HTMLDivElement, SidebarType>(
  (
    {
      onCreate,
      createLabel,
      createDisabled = false,
      onToggle,
      open = false,
      maxHeight,
      children,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(open);

    const handleToggle = () => {
      setIsOpen((o) => !o);
      onToggle?.(!isOpen);
    };

    return (
      <SideBarContext.Provider value={{ isOpen }}>
        <Container
          width={isOpen ? '256px' : '72px'}
          ref={ref}
          maxHeight={maxHeight}
          data-testid="sidebar"
        >
          <TopContainer>
            {onCreate && createLabel && (
              <CreateItem
                isOpen={isOpen}
                createLabel={createLabel}
                onCreate={onCreate}
                disabled={createDisabled}
              />
            )}
            {children}
          </TopContainer>
          <ToggleOpen isOpen={isOpen} toggle={handleToggle} />
          <LogoContainer>
            <EquinorLogo />
          </LogoContainer>
        </Container>
      </SideBarContext.Provider>
    );
  }
);

SideBar.displayName = 'SideBar';