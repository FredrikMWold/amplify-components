import { FC, ReactElement, useRef, useState } from 'react';

import { Icon, Radio, Typography } from '@equinor/eds-core-react';
import { settings } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';

import { TopBarButton } from './TopBar.styles';
import TopBarMenu from './TopBarMenu';
import { spacings } from 'src/style';

import styled from 'styled-components';

const { colors, elevation } = tokens;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
  color: ${colors.text.static_icons__default.rgba};
`;

interface StyledColorBoxProps {
  $color: string;
}

const StyledColorBox = styled.div<StyledColorBoxProps>`
  width: 64px;
  height: 32px;
  background-color: ${(props) => props.$color};
  box-shadow: ${elevation.raised};
  border-radius: 4px;
`;

const SettingsItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.medium};
`;

export interface ISettingsSections {
  title: string;
  type: string;
  onChange?: (val: string) => void;
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

export const Settings: FC<ISettingsProps> = ({ allSettings }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <TopBarButton
        variant="ghost"
        onClick={toggleMenu}
        ref={buttonRef}
        $isSelected={isOpen}
      >
        <Icon data={settings} size={24} />
      </TopBarButton>
      <TopBarMenu
        open={isOpen}
        title="Settings"
        onClose={closeMenu}
        anchorEl={buttonRef.current}
      >
        <SettingsItems>
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
                      $color={item.colorBox}
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
        </SettingsItems>
      </TopBarMenu>
    </>
  );
};

export default Settings;
Settings.displayName = 'TopBar.Settings';
