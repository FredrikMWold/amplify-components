import {
  ChangeEvent,
  ComponentType,
  FocusEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Link,
  matchPath,
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import {
  Button,
  Icon,
  Tabs,
  TabsProps,
  Typography,
} from '@equinor/eds-core-react';
import { chevron_left, chevron_right } from '@equinor/eds-icons';
import { mergeRefs } from '@equinor/eds-utils';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import { Search } from 'src/molecules/Search/Search';
import page from 'src/molecules/Tabs/Tabs.docs.mdx';
import { Stack } from 'src/storybook';

import styled from 'styled-components';

const icons = {
  chevron_left,
  chevron_right,
};

Icon.add(icons);

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  subcomponents: {
    List: Tabs.List as ComponentType<unknown>,
    Tab: Tabs.Tab as ComponentType<unknown>,
    Panels: Tabs.Panels as ComponentType<unknown>,
    Panel: Tabs.Panel as ComponentType<unknown>,
  },
  argTypes: {
    activeTab: {
      options: [0, 1],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      page,
      source: {
        excludeDecorators: true,
      },
    },
  },
};

export default meta;

const noop = () => {};

const TabsRow = styled.div`
  display: flex;
`;
const StyledTab = styled(Tabs.Tab)`
  background: pink;
`;

const StyledTabPanel = styled(Tabs.Panel)`
  padding: 32px;
  background: peachpuff;
`;

const NavButton = styled(Button)`
  flex-shrink: 0;
`;

export const Introduction: StoryFn<TabsProps> = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab>One</Tabs.Tab>
        <Tabs.Tab>Two</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>Panel one</Tabs.Panel>
        <Tabs.Panel>Panel two</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};
Introduction.decorators = [
  (Story) => {
    return (
      <Stack>
        <Story />
      </Stack>
    );
  },
];

export const States: StoryFn<TabsProps> = () => {
  const focusedRef = useRef<HTMLButtonElement>(null);

  return (
    <Tabs activeTab={2} onChange={noop}>
      <Tabs.List>
        <Tabs.Tab>Enabled</Tabs.Tab>
        <Tabs.Tab disabled>Disabled</Tabs.Tab>
        <Tabs.Tab>Active</Tabs.Tab>
        <Tabs.Tab data-hover>Hover</Tabs.Tab>
        <Tabs.Tab data-focus ref={focusedRef}>
          Focus
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
States.decorators = [
  (Story) => {
    return (
      <Stack>
        <Story />
      </Stack>
    );
  },
];

export const Widths: StoryFn<TabsProps> = () => {
  return (
    <>
      <Typography variant="h4">minWidth</Typography>
      <Tabs activeTab={1} onChange={noop} variant="minWidth">
        <Tabs.List>
          <Tabs.Tab>Text</Tabs.Tab>
          <Tabs.Tab>More text</Tabs.Tab>
          <Tabs.Tab>A really long line of text</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Typography variant="h4" style={{ marginTop: '1rem' }}>
        fullWidth
      </Typography>
      <Tabs activeTab={1} onChange={noop} variant="fullWidth">
        <Tabs.List>
          <Tabs.Tab>Text</Tabs.Tab>
          <Tabs.Tab>More text</Tabs.Tab>
          <Tabs.Tab>A really long line of text</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </>
  );
};

export const WithPanels: StoryFn<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tabs activeTab={activeTab} onChange={handleChange}>
      <Tabs.List>
        <Tabs.Tab>Tab one</Tabs.Tab>
        <Tabs.Tab>Tab two</Tabs.Tab>
        <Tabs.Tab disabled>Tab three</Tabs.Tab>
        <Tabs.Tab>Tab four</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels conditionalRender>
        <Tabs.Panel>Panel one</Tabs.Panel>
        <Tabs.Panel>Panel two</Tabs.Panel>
        <Tabs.Panel>Panel three</Tabs.Panel>
        <Tabs.Panel>Panel four</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};
WithPanels.storyName = 'With panels';
WithPanels.decorators = [
  (Story) => {
    return (
      <Stack>
        <Story />
      </Stack>
    );
  },
];

export const Router: StoryFn<TabsProps> = () => {
  /*import {MemoryRouter, Route, Routes, Link, matchPath, useLocation} from 'react-router-dom' */
  function CurrentRoute() {
    const location = useLocation();
    return <Typography>Current route: {location.pathname}</Typography>;
  }
  function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();

    for (const pattern of patterns) {
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return null;
  }
  function RouterTabs() {
    const routeMatch = useRouteMatch(['/wells/:id', '/home', '/settings']);
    const currentPath = routeMatch?.pattern?.path;

    return (
      <Tabs activeTab={currentPath}>
        <Tabs.List>
          <Tabs.Tab value="/home" to="/home" as={Link}>
            Home
          </Tabs.Tab>
          <Tabs.Tab value="/wells/:id" to="/wells/1" as={Link}>
            Wells
          </Tabs.Tab>
          <Tabs.Tab value="/settings" to="/settings" as={Link}>
            Settings
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    );
  }

  return (
    <MemoryRouter initialEntries={['/home']} initialIndex={0}>
      <RouterTabs />
      <Routes>
        <Route path="*" element={<CurrentRoute />} />
      </Routes>
    </MemoryRouter>
  );
};
Router.decorators = [
  (Story) => {
    return (
      <Stack direction="column">
        <Story />
      </Stack>
    );
  },
];

export const WithSearch: StoryFn<TabsProps> = () => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleOnTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
  };
  const handleChange = (index: number) => {
    setActiveTab(index);
  };

  const handleFocus = (e: FocusEvent<HTMLDivElement>) => {
    action('handleFocus')(e.target.textContent);
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    action('handleBlur')(e.target.textContent);
  };

  return (
    <>
      <Search
        value={searchText}
        placeholder="Search "
        onChange={handleOnTextChange}
      />
      <Tabs
        style={{ marginTop: '2rem' }}
        activeTab={activeTab}
        onChange={handleChange}
        variant="fullWidth"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <Tabs.List>
          <Tabs.Tab>Tags (5+)</Tabs.Tab>
          <Tabs.Tab> Docs (5+)</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Panel one</Tabs.Panel>
          <Tabs.Panel>Panel two</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </>
  );
};
WithSearch.storyName = 'With search';

export const WithInputInPanel: StoryFn<TabsProps> = () => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleOnTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
  };
  const handleChange = (index: number) => {
    setActiveTab(index);
  };

  const handleFocus = (e: FocusEvent<HTMLDivElement>) => {
    action('handleFocus')(e.target.textContent);
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    action('handleBlur')(e.target.textContent);
  };

  return (
    <Tabs
      style={{ marginTop: '2rem' }}
      activeTab={activeTab}
      onChange={handleChange}
      variant="fullWidth"
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Tabs.List>
        <Tabs.Tab>Tab with textfield</Tabs.Tab>
        <Tabs.Tab>Other tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel style={{ maxWidth: '20em' }}>
          <Typography variant="body_short" style={{ marginBottom: '1rem' }}>
            Panel one
          </Typography>
          <Search
            value={searchText}
            placeholder="Search"
            onChange={handleOnTextChange}
          />
        </Tabs.Panel>
        <Tabs.Panel>
          <Typography variant="body_short">Panel two</Typography>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};
WithInputInPanel.storyName = 'With input in panel';

export const WithStyledComponent: StoryFn<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (index: number) => {
    setActiveTab(index);
  };

  const items = [
    { name: 'Tab 1', value: 'Tab 1 body as PLAIN TEXT' },
    { name: 'Tab 2', value: <Typography>Tab 2 body as TYPOGRAPHY</Typography> },
    { name: 'Tab 3', value: <div>Tab 3 as DIV</div> },
  ];

  return (
    <Tabs activeTab={activeTab} onChange={handleChange}>
      <Tabs.List>
        {items.map(({ name }) => (
          <StyledTab key={name}>{name}</StyledTab>
        ))}
      </Tabs.List>
      <Tabs.Panels>
        {items.map(({ name, value }) => (
          <StyledTabPanel key={name}>{value}</StyledTabPanel>
        ))}
      </Tabs.Panels>
    </Tabs>
  );
};
WithStyledComponent.storyName = 'With styled component';

export const Overflow: StoryFn<TabsProps> = () => {
  const list = useRef<HTMLDivElement>(null);
  const debounceScroll = useRef<ReturnType<typeof setTimeout>>(
    setTimeout(() => null, 100)
  );
  const [activeTab, setActiveTab] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handleChange = (index: number) => {
    setActiveTab(index);
  };

  const handleScroll = useCallback(() => {
    if (debounceScroll.current) clearTimeout(debounceScroll.current);
    debounceScroll.current = setTimeout(() => {
      if (!list.current) return;
      if (list.current.scrollLeft === 0) setPrevDisabled(true);
      else setPrevDisabled(false);

      const atEndIsh =
        Math.abs(
          containerWidth + Math.round(list.current.scrollLeft) - totalWidth
        ) <= 5;

      if (atEndIsh) setNextDisabled(true);
      else setNextDisabled(false);
    }, 20);
  }, [containerWidth, totalWidth]);

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          setContainerWidth(Math.round(entry.borderBoxSize[0].inlineSize));
          handleScroll();
        });
      }),
    [handleScroll]
  );

  const listCallback = useCallback(
    (node: HTMLDivElement) => {
      if (!node) return;
      setTotalWidth(node.scrollWidth);
      setContainerWidth(node.clientWidth);
      resizeObserver.observe(node);
      node.addEventListener('scroll', handleScroll, { passive: true });
    },
    [handleScroll, resizeObserver]
  );

  useEffect(() => {
    const cachedList = list.current;
    return () => {
      if (debounceScroll.current) clearTimeout(debounceScroll.current);
      cachedList?.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [handleScroll, resizeObserver]);

  const scroll = (direction: string) => {
    //Tabs have "scroll-snap-align: end" so we need to scroll less than
    //the full row to avoid skipping past tabs. Here we set it to 80%
    const SCROLL_AMOUNT = 0.8;
    let target = 0;
    const signifier = direction === 'left' ? -1 : 1;
    if (list.current !== null) {
      target =
        list.current.scrollLeft + signifier * containerWidth * SCROLL_AMOUNT;
    }
    list.current?.scrollTo(target, 0);
  };

  return (
    <Tabs activeTab={activeTab} onChange={handleChange}>
      <TabsRow>
        <NavButton
          variant="ghost_icon"
          onClick={() => scroll('left')}
          aria-hidden="true"
          tabIndex={-1}
          disabled={prevDisabled}
        >
          <Icon name="chevron_left" />
        </NavButton>
        <Tabs.List ref={mergeRefs<HTMLDivElement>(list, listCallback)}>
          {Array.from({ length: 20 }, (_, i) => (
            <Tabs.Tab key={i}>Tab Title {i + 1}</Tabs.Tab>
          ))}
        </Tabs.List>
        <NavButton
          variant="ghost_icon"
          onClick={() => scroll('right')}
          aria-hidden="true"
          tabIndex={-1}
          disabled={nextDisabled}
        >
          <Icon name="chevron_right" />
        </NavButton>
      </TabsRow>
      <Tabs.Panels>
        {Array.from({ length: 20 }, (_, i) => (
          <Tabs.Panel key={i}>Panel {i + 1}</Tabs.Panel>
        ))}
      </Tabs.Panels>
    </Tabs>
  );
};
Overflow.storyName = 'Overflow with next/previous buttons';

export const OverflowScroll: StoryFn<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tabs activeTab={activeTab} onChange={handleChange} scrollable>
      <Tabs.List>
        {Array.from({ length: 20 }, (_, i) => (
          <Tabs.Tab key={i}>Tab Title {i + 1}</Tabs.Tab>
        ))}
      </Tabs.List>
      <Tabs.Panels>
        {Array.from({ length: 20 }, (_, i) => (
          <Tabs.Panel key={i}>Panel {i + 1}</Tabs.Panel>
        ))}
      </Tabs.Panels>
    </Tabs>
  );
};
OverflowScroll.storyName = 'Overflow with default scrollbar';
