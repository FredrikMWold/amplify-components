import { FC, useCallback, useEffect, useRef, useState } from 'react';

import {
  Chip as EDSChip,
  Icon,
  Label,
  Menu as EDSMenu,
  Typography,
} from '@equinor/eds-core-react';
import {
  arrow_drop_down,
  arrow_drop_up,
  checkbox,
  checkbox_outline,
} from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import { useOutsideClick } from '@equinor/eds-utils';

import ResizeObserver from 'resize-observer-polyfill';
import styled from 'styled-components';

const { spacings, colors, shape } = tokens;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.comfortable.xx_small};
`;

interface SelectElementProps {
  open: boolean;
}

const SelectElement = styled.div<SelectElementProps>`
  background: ${colors.ui.background__light.hex};
  ${(props) =>
    props.open
      ? `box-shadow: inset 0px -2px 0px 0px ${colors.interactive.primary__resting.hex}`
      : `box-shadow: inset 0px -1px 0px 0px ${colors.text.static_icons__tertiary.hex}`};
  position: relative;
  &:hover {
    cursor: pointer;
  }
  > div {
    min-height: 36px;
    align-items: center;
    padding: ${spacings.comfortable.x_small};
    margin-right: ${spacings.comfortable.xx_large};
    gap: ${spacings.comfortable.x_small};
    display: flex;
    flex-wrap: wrap;
  }
`;

const Placeholder = styled(Typography)`
  color: ${colors.text.static_icons__secondary.hex};
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: ${spacings.comfortable.small};
`;

const Arrow = styled(Icon)`
  position: absolute;
  right: ${spacings.comfortable.small};
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
  width: 24px;
  &:hover {
    border-radius: ${shape.circle.borderRadius};
    background: ${colors.interactive.primary__hover_alt.hex};
  }
`;

interface MenuProps {
  maxHeight?: string;
}

const Menu = styled(EDSMenu)<MenuProps>`
  z-index: 500;
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '16rem')};
  overflow: auto !important;
`;

const MenuItem = styled(Menu.Item)`
  display: grid;
  grid-template-columns: auto 1fr;
  &:focus {
    outline: none;
  }
`;

const Chip = styled(EDSChip)`
  color: ${colors.interactive.primary__resting.hex};
  background: ${colors.ui.background__info.hex};
  line-height: normal;
  > svg {
    z-index: auto;
  }
`;

export interface ChippedMultiSelectProps {
  label: string;
  placeholder: string;
  items: string[];
  onSelect: (selectedItems: string[]) => void;
  values: string[];
  maxHeight?: string;
  disabled?: boolean;
  formatter?: (val: string) => string;
  inDialog?: boolean;
}

const ChippedMultiSelect: FC<ChippedMultiSelectProps> = ({
  label,
  placeholder,
  items,
  onSelect,
  values,
  maxHeight,
  formatter,
  disabled = false,
  inDialog = false,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(containerRef.current, (e: MouseEvent) => {
    if (
      open &&
      menuRef.current &&
      !menuRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  });

  const handleClick = (selectedItem: string) => {
    let newSelectedItems: string[];
    // Select
    if (!values.includes(selectedItem)) {
      newSelectedItems = [...values, selectedItem];
    } else {
      // De-select
      newSelectedItems = values.filter((item) => item !== selectedItem);
    }
    onSelect(newSelectedItems);
  };

  const handleScroll = useCallback(() => {
    if (anchorRef.current && menuRef.current) {
      const { top } = anchorRef.current.getBoundingClientRect();
      // 4px is ${spacings.comfortable.x_small}
      menuRef.current.style.top = `${
        top + anchorRef.current?.clientHeight + 4
      }px`;
    }
  }, []);

  const handleSetRef = (ref: HTMLDivElement | null) => {
    anchorRef.current = ref;
    if (ref) {
      const observer = new ResizeObserver(handleScroll);
      observer.observe(ref);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <div ref={containerRef}>
      <Container>
        <Label label={label} />
        <SelectElement
          open={open}
          role="combobox"
          onClick={() => {
            if (!disabled) {
              setOpen((o) => !o);
            }
          }}
          ref={handleSetRef}
        >
          {values.length === 0 ? (
            <Placeholder>{placeholder}</Placeholder>
          ) : (
            <div>
              {values.map((item) => (
                <Chip key={item} onDelete={() => handleClick(item)}>
                  {formatter ? formatter(item) : item}
                </Chip>
              ))}
            </div>
          )}
          <Arrow
            data={open ? arrow_drop_up : arrow_drop_down}
            color={colors.interactive.primary__resting.hex}
          />
        </SelectElement>
      </Container>
      {open && (
        <Menu
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom"
          maxHeight={maxHeight}
          ref={menuRef}
          style={{
            width: `${anchorRef.current?.offsetWidth}px`,
            zIndex: inDialog ? 1400 : 'auto',
          }}
        >
          {items.map((item) => (
            <MenuItem key={item} onClick={() => handleClick(item)}>
              <Icon
                data={values.includes(item) ? checkbox : checkbox_outline}
                color={colors.interactive.primary__resting.hex}
              />
              {formatter ? formatter(item) : item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
};

export default ChippedMultiSelect;
