import { ChangeEvent, FC, KeyboardEvent, ReactNode, useState } from 'react';

import { Button, Icon } from '@equinor/eds-core-react';
import {
  arrow_drop_down,
  arrow_drop_up,
  clear,
  filter_list,
  IconData,
} from '@equinor/eds-icons';

import { Container, Content, StyledChip, Wrapper } from './FilterHeader.styles';
import { colors } from 'src/atoms/style/colors';

import { AnimatePresence } from 'framer-motion';

export interface FilterHeaderProps {
  values: { value: string; label: string; icon?: IconData }[];
  onClearFilter: (value: string) => void;
  onClearAllFilters: () => void;
  onSearch: (value: string) => void;
  children: ReactNode | ReactNode[];
  initialOpen?: boolean;
  placeholder?: string;
  showClearFiltersButton?: boolean;
}

export const FilterHeader: FC<FilterHeaderProps> = ({
  values,
  onSearch,
  onClearFilter,
  onClearAllFilters,
  children,
  initialOpen = false,
  placeholder = 'Search...',
  showClearFiltersButton = true,
}) => {
  const [open, setOpen] = useState(initialOpen);
  const [search, setSearch] = useState('');
  const [attemptingToRemove, setAttemptingToRemove] = useState<number>(-1);

  const handleOnToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleOnFocus = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && search !== '') {
      event.preventDefault();
      onSearch(search);
      setSearch('');
    }
    if (event.key === 'Backspace' && search === '') {
      if (values.length > 0 && attemptingToRemove === -1) {
        setAttemptingToRemove(values.length - 1);
      } else if (attemptingToRemove !== -1) {
        onClearFilter(values[attemptingToRemove].value);
        setAttemptingToRemove(-1);
      }
    }
  };

  return (
    <Wrapper>
      <Container $open={open}>
        <Icon
          data={filter_list}
          color={colors.interactive.primary__resting.rgba}
        />
        <section>
          {values.map(({ value, label, icon }, index) => (
            <StyledChip
              key={value}
              onDelete={() => onClearFilter(value)}
              leadingIconData={icon}
              $tryingToRemove={attemptingToRemove === index}
            >
              {label}
            </StyledChip>
          ))}
          <input
            id="filter-search"
            type="search"
            value={search}
            placeholder={placeholder}
            onChange={handleOnChange}
            onKeyDownCapture={handleOnKeyDown}
            onFocus={handleOnFocus}
          />
        </section>
        {values.length > 0 && (
          <Button variant="ghost_icon" onClick={onClearAllFilters}>
            <Icon
              data={clear}
              size={16}
              color={colors.text.static_icons__tertiary.rgba}
            />
          </Button>
        )}
        <Button variant="ghost_icon" onClick={handleOnToggleOpen}>
          <Icon data={open ? arrow_drop_up : arrow_drop_down} />
        </Button>
      </Container>
      <AnimatePresence>
        {open && (
          <Content
            $showClearFilterButton={showClearFiltersButton}
            animate={{ height: 'auto' }}
            initial={{ height: 0 }}
            exit={{ height: 0 }}
          >
            <section>
              {Array.isArray(children) ? (
                children.map((child, index) => (
                  <div key={index}>
                    {child}
                    {index === children.length - 1 && (
                      <Button variant="outlined" onClick={onClearAllFilters}>
                        Clear filters
                      </Button>
                    )}
                  </div>
                ))
              ) : (
                <div>
                  {children}
                  <Button variant="outlined" onClick={onClearAllFilters}>
                    Clear filters
                  </Button>
                </div>
              )}
            </section>
          </Content>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
