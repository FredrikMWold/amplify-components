import { ChangeEvent, KeyboardEvent, useMemo, useRef, useState } from 'react';

import { Chip, Icon, Menu } from '@equinor/eds-core-react';
import { arrow_drop_down, arrow_drop_up } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';

import {
  AmplifyComboBoxProps,
  AmplifyGroupedComboboxProps,
  ComboBoxOption,
} from './AmplifyComboBox.types';
import AmplifyComboBoxMenu from './AmplifyComboBoxMenu';
import AmplifyGroupedComboBoxMenu from './AmplifyGroupedComboBoxMenu';

import styled from 'styled-components';

const { colors } = tokens;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  max-width: 20rem;
  background: white;
  border: 1px solid grey;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  input[type='search'] {
    width: 0;
    flex-grow: 1;
    padding: 0;
    font-family: 'Equinor', sans-serif;
    outline: none;
    border: none;
  }
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    appearance: none;
  }
`;

const StyledChip = styled(Chip)`
  background: ${colors.ui.background__default.rgba};
`;

export type AmplifyComboBoxComponentProps<T extends ComboBoxOption> = {
  label: string;
} & (AmplifyComboBoxProps<T> | AmplifyGroupedComboboxProps<T>);

const AmplifyComboBox = <T extends ComboBoxOption>(
  props: AmplifyComboBoxComponentProps<T>
) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const focusingItemIndex = useRef<number>(-1);

  const selectedValues: T[] = useMemo(() => {
    if ('values' in props) return props.values;
    if (props.value) return [props.value];
    return [];
  }, [props]);

  const handleOnOpen = () => {
    if (!open) {
      searchRef.current?.focus();
      setOpen(true);
    }
  };

  const handleOnClose = () => {
    setOpen(false);
    setSearch('');
    focusingItemIndex.current = 0;
  };

  const handleOnSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOnItemSelect = (item: T) => {
    if ('value' in props) {
      props.onSelect(item);
      return;
    } else if (props.values.find((i) => i.value === item.value)) {
      props.onSelect(
        props.values.filter((i) => i.value !== item.value),
        item
      );
    } else {
      props.onSelect([...props.values, item], item);
    }
  };

  const handleOnRemoveItem = (item: T) => {
    if ('value' in props) props.onSelect(undefined);
    else {
      props.onSelect(
        props.values.filter((i) => i.value !== item.value),
        item
      );
    }
  };

  const handleOnSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      searchRef.current?.blur();
      handleOnClose();
    } else if (event.key === 'ArrowDown') {
      if (itemRefs.current.at(0)) {
        itemRefs.current[0]?.focus();
        focusingItemIndex.current = 0;
      }
    }
  };

  const handleOnItemKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (
      event.key === 'ArrowDown' &&
      focusingItemIndex.current < itemRefs.current.length - 1
    ) {
      focusingItemIndex.current += 1;
      itemRefs.current.at(focusingItemIndex.current)?.focus();
    } else if (event.key === 'ArrowUp' && focusingItemIndex.current > 0) {
      focusingItemIndex.current -= 1;
      itemRefs.current.at(focusingItemIndex.current)?.focus();
    }
  };

  return (
    <>
      <Container ref={anchorRef} onClick={handleOnOpen}>
        <Section>
          {selectedValues.map((value) => (
            <StyledChip
              key={value.value}
              onDelete={() => handleOnRemoveItem(value)}
            >
              {value.label}
            </StyledChip>
          ))}
          <input
            ref={searchRef}
            type="search"
            value={search}
            onChange={handleOnSearchChange}
            onKeyDownCapture={handleOnSearchKeyDown}
          />
        </Section>
        <Icon
          data={open ? arrow_drop_up : arrow_drop_down}
          color={colors.text.static_icons__default.rgba}
        />
      </Container>
      {open && (
        <Menu
          open
          anchorEl={anchorRef.current}
          onClose={handleOnClose}
          placement="bottom"
          style={{
            width: `${anchorRef.current?.clientWidth}px`,
            maxHeight: '20rem',
            overflow: 'auto',
          }}
        >
          {'groups' in props ? (
            <AmplifyGroupedComboBoxMenu
              {...props}
              search={search}
              itemRefs={itemRefs}
              onItemSelect={handleOnItemSelect}
              onItemKeyDown={handleOnItemKeyDown}
            />
          ) : (
            <AmplifyComboBoxMenu
              {...props}
              search={search}
              itemRefs={itemRefs}
              onItemSelect={handleOnItemSelect}
              onItemKeyDown={handleOnItemKeyDown}
            />
          )}
        </Menu>
      )}
    </>
  );
};

export default AmplifyComboBox;
