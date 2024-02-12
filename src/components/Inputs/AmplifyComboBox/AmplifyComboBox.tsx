import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Icon, Label, Menu } from '@equinor/eds-core-react';
import { arrow_drop_down, arrow_drop_up } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';

import {
  Container,
  PlaceholderText,
  Section,
  StyledChip,
} from './AmplifyComboBox.styles';
import {
  AmplifyComboBoxProps,
  AmplifyGroupedComboboxProps,
  ComboBoxOption,
} from './AmplifyComboBox.types';
import AmplifyComboBoxMenu from './AmplifyComboBoxMenu';
import AmplifyGroupedComboBoxMenu from './AmplifyGroupedComboBoxMenu';

const { colors } = tokens;

export type AmplifyComboBoxComponentProps<T extends ComboBoxOption<T>> = {
  label: string;
  placeholder?: string;
  sortValues?: boolean;
} & (AmplifyComboBoxProps<T> | AmplifyGroupedComboboxProps<T>);

const AmplifyComboBox = <T extends ComboBoxOption<T>>(
  props: AmplifyComboBoxComponentProps<T>
) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const focusingItemIndex = useRef<number>(-1);
  const [tryingToRemoveItem, setTryingToRemoveItem] = useState<T | undefined>(
    undefined
  );
  const internalUpdateOfValues = useRef<boolean>(false);
  const previousAmountOfValues = useRef<number>(0);

  if ('groups' in props && 'items' in props) {
    throw new Error("Can't use both items and groups!");
  }

  const selectedValues: T[] = useMemo(() => {
    let selected: T[] = [];
    if ('values' in props) {
      selected = props.values;
    } else if (props.value) {
      selected = [props.value];
    }

    if (props.sortValues === false) return selected;

    let flattenedItems: T[];
    if ('groups' in props) {
      flattenedItems = props.groups.flatMap((group) => group.items);
    } else {
      flattenedItems = props.items.flatMap((item) => [
        { ...item },
        ...((item.children as T[]) || []),
      ]);
    }

    return selected.sort((a, b) => {
      const firstIndex = flattenedItems.findIndex(
        (item) => item.value === a.value
      );
      const secondIndex = flattenedItems.findIndex(
        (item) => item.value === b.value
      );
      return firstIndex - secondIndex;
    });
  }, [props]);

  useEffect(() => {
    if (
      internalUpdateOfValues.current &&
      previousAmountOfValues.current !== selectedValues.length
    ) {
      previousAmountOfValues.current = selectedValues.length;
      internalUpdateOfValues.current = false;
      searchRef.current?.focus();
    }
  }, [selectedValues.length]);

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

  const handleToggleOpen = () => {
    if (open) {
      handleOnClose();
    } else {
      handleOnOpen();
    }
  };

  const handleOnSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === ' ') return;
    setSearch(event.target.value);
    if (!open) {
      setOpen(true);
    }
  };

  const handleOnItemSelect = (item: T) => {
    if ('value' in props) {
      props.onSelect(item);
    } else if (
      props.values.find((i) => i.value === item.value) &&
      ('groups' in props || props.selectableParent === false)
    ) {
      props.onSelect(
        props.values.filter((i) => i.value !== item.value),
        item
      );
    } else if (props.values.find((i) => i.value === item.value)) {
      // Remove parent with all children
      const copiedItem = JSON.parse(JSON.stringify(item));
      const removingValues: string[] = [copiedItem.value];
      const childItems = copiedItem.children || [];
      while (childItems.length > 0) {
        const child = childItems.splice(0, 1)[0];
        if (child.children) {
          childItems.push(...child.children);
        }
        removingValues.push(child.value);
      }
      props.onSelect(
        props.values.filter((i) => !removingValues.includes(i.value)),
        item
      );
    } else if ('groups' in props || props.selectableParent === false) {
      props.onSelect([...props.values, item], item);
    } else {
      // Add parent with all children
      const copiedItem = JSON.parse(JSON.stringify(item));
      const newValues = [copiedItem];
      const childItems = copiedItem.children || [];
      while (childItems.length > 0) {
        const child = childItems.splice(0, 1)[0];
        if (child.children) {
          childItems.push(...child.children);
        }
        if (!props.values.find((value) => value.value === child.value)) {
          newValues.push(child);
        }
      }
      props.onSelect([...props.values, ...newValues], item);
    }

    if (search !== '') {
      setSearch('');
    }
    internalUpdateOfValues.current = true;
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
    if (event.key === 'Space' || event.key === 'Enter') {
      handleOnOpen();
    } else if (event.key === 'Escape') {
      searchRef.current?.blur();
      handleOnClose();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (itemRefs.current.at(0)) {
        itemRefs.current[0]?.focus();
        focusingItemIndex.current = 0;
      }
    } else if (
      event.key === 'Backspace' &&
      tryingToRemoveItem === undefined &&
      search === ''
    ) {
      setTryingToRemoveItem(selectedValues?.at(-1));
    } else if (event.key === 'Backspace' && tryingToRemoveItem) {
      handleOnRemoveItem(tryingToRemoveItem);
      setTryingToRemoveItem(undefined);
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
    } else if (event.key === 'ArrowUp' && focusingItemIndex.current === 0) {
      focusingItemIndex.current = -1;
      searchRef.current?.focus();
    }
  };

  return (
    <>
      <Container ref={anchorRef} onClick={handleOnOpen} aria-expanded={open}>
        <Label label={props.label} htmlFor="amplify-combobox" />
        <Section>
          {selectedValues.length > 0 || search !== '' ? (
            selectedValues.map((value) => (
              <StyledChip
                key={value.value}
                onDelete={() => handleOnRemoveItem(value)}
                $tryingToRemove={tryingToRemoveItem?.value === value.value}
              >
                {value.label}
              </StyledChip>
            ))
          ) : (
            <PlaceholderText>
              {props.placeholder ? props.placeholder : 'Select...'}
            </PlaceholderText>
          )}
          <input
            id="amplify-combobox"
            ref={searchRef}
            type="search"
            role="combobox"
            value={search}
            autoComplete="off"
            onChange={handleOnSearchChange}
            onKeyDownCapture={handleOnSearchKeyDown}
          />
        </Section>
        <Icon
          onClick={handleToggleOpen}
          data={open ? arrow_drop_up : arrow_drop_down}
          color={colors.text.static_icons__default.rgba}
        />
      </Container>
      {open && (
        <Menu
          open
          id="combobox-menu"
          anchorEl={anchorRef.current}
          onClose={handleOnClose}
          placement="bottom"
          matchAnchorWidth
          style={{
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
              selectableParent={
                'values' in props ? props.selectableParent : false
              }
            />
          )}
        </Menu>
      )}
    </>
  );
};

export default AmplifyComboBox;
