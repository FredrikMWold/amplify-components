import React, { forwardRef, ReactElement, useState } from 'react';

import { Button, Icon, Menu, Radio, Typography } from '@equinor/eds-core-react';
import { clear, settings } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';

import styled from 'styled-components';

const { colors, elevation } = tokens;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
`;

const StyledMenu = styled(Menu)`
  width: 320px;
  padding: 16px;
`;

interface StyledColorBoxProps {
  color: string;
}

const StyledColorBox = styled.div<StyledColorBoxProps>`
  width: 64px;
  height: 32px;
  background-color: ${(props) => props.color};
  box-shadow: ${elevation.raised};
  border-radius: 4px;
`;

export interface ISettingsSections {
  title: string;
  type: string;
  onChange?: (val: any) => void;
  items: {
    label: string;
    name: string;
    value: string;
    colorBox?: string;
    element?: ReactElement;
    text?: string;
    disabled?: boolean;
  }[];
}

export interface ISettingsProps {
  allSettings: ISettingsSections[];
}

export const Settings = forwardRef<HTMLButtonElement, ISettingsProps>(
  ({ allSettings }, ref) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const isOpen = Boolean(anchorEl);

    const openMenu = (
      e:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.KeyboardEvent<HTMLButtonElement>
    ) => {
      const target = e.target as HTMLButtonElement;
      setAnchorEl(target);
    };

    const closeMenu = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button
          variant="ghost_icon"
          onClick={(e) => (isOpen ? closeMenu() : openMenu(e))}
          ref={ref}
        >
          <Icon
            data={settings}
            size={24}
            color={colors.interactive.primary__resting.hsla}
          />
        </Button>
        {isOpen && (
          <StyledMenu
            id="menu-on-button"
            aria-labelledby="menuButton"
            open={isOpen}
            anchorEl={anchorEl}
            onClose={closeMenu}
            placement="bottom-start"
          >
            <Header>
              <Typography variant="h6" as="span">
                Settings
              </Typography>
              <Button variant="ghost_icon" onClick={closeMenu}>
                <Icon data={clear} />
              </Button>
            </Header>
            {allSettings.map((section, ind) => (
              <div key={ind}>
                <Typography variant="overline">{section.title}</Typography>
                {section.items.map((item, index) => (
                  <ContentWrapper key={index}>
                    <Radio
                      disabled={item.disabled}
                      label={item.label}
                      name={item.name}
                      value={item.value}
                      checked={section.type === item.value}
                      onChange={() => section.onChange?.(item.value)}
                    />
                    {item.colorBox && (
                      <StyledColorBox
                        color={item.colorBox}
                        data-testid={`colorbox-${item.colorBox}`}
                      />
                    )}
                    {item.text && (
                      <Typography variant="h6">{item.text}</Typography>
                    )}
                    {item.element && item.element}
                  </ContentWrapper>
                ))}
              </div>
            ))}
          </StyledMenu>
        )}
      </>
    );
  }
);

export default Settings;
Settings.displayName = 'TopBar.Settings';
