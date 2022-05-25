import '@testing-library/jest-dom/extend-expect';

import { home, star_half } from '@equinor/eds-icons';
import { render, screen } from '../../test-utils';

import { MenuItemType } from './MenuItem';
import React from 'react';
import SideBar from '.';
import { isExportDeclaration } from 'typescript';
import userEvent from '@testing-library/user-event';

const defaultMenuItems: MenuItemType[] = [
  {
    name: 'Home',
    icon: home,
    link: 'home',
    onClick: jest.fn(),
  },
  {
    name: 'Another Link',
    icon: star_half,
    link: 'another',
    onClick: jest.fn(),
  },
];

test('Renders create new button when onCreate prop is given', () => {
  render(
    <SideBar
      onCreate={() => console.log('test')}
      createLabel="createlabel"
      open={true}
    >
      {defaultMenuItems.map((m) => (
        <SideBar.Item key={m.name} {...m} />
      ))}
    </SideBar>
  );
  expect(screen.getByText('createlabel')).toBeInTheDocument();
});

test('Renders closed width when closed', () => {
  render(
    <SideBar open={false}>
      {defaultMenuItems.map((m) => (
        <SideBar.Item key={m.name} {...m} />
      ))}
    </SideBar>
  );

  expect(screen.getByTestId('sidebar').getAttribute('width')).toBe('72px');
});

test('Renders open width when open', () => {
  render(
    <SideBar open={true}>
      {defaultMenuItems.map((m) => (
        <SideBar.Item key={m.name} {...m} />
      ))}
    </SideBar>
  );

  expect(screen.getAllByRole('generic')[2]).toHaveStyle({ width: '256px' });
});

test('Triggers onToggle callback when closed', async () => {
  const cb = jest.fn();
  render(
    <SideBar open={true} onToggle={cb}>
      {defaultMenuItems.map((m) => (
        <SideBar.Item key={m.name} {...m} />
      ))}
    </SideBar>
  );
  const user = userEvent.setup();

  const collapse = screen.getByRole('button', { name: /collapse/i });
  await user.click(collapse);

  expect(cb).toHaveBeenCalled();
});

test('Triggers onToggle callback when opened', async () => {
  const cb = jest.fn();
  render(
    <SideBar open={false} onToggle={cb}>
      {defaultMenuItems.map((m) => (
        <SideBar.Item key={m.name} {...m} />
      ))}
    </SideBar>
  );
  const user = userEvent.setup();

  const expand = screen.getByRole('button');
  await user.click(expand);

  expect(cb).toHaveBeenCalled();
});

test('onToggle send correct state back', async () => {
  const toggle = jest.fn();
  render(
    <SideBar open={false} onToggle={toggle}>
      {defaultMenuItems.map((m) => (
        <SideBar.Item key={m.name} {...m} />
      ))}
    </SideBar>
  );
  const user = userEvent.setup();

  const expand = screen.getByRole('button');
  await user.click(expand);

  expect(toggle).toBeCalled();
  expect(toggle).toHaveBeenCalledWith(true); // Since we send in false to start with
});

test('Disabled create new button doesnt fire event', async () => {
  const createNewFn = jest.fn();
  render(
    <SideBar
      open
      createLabel="Create new"
      onCreate={createNewFn}
      createDisabled
    >
      {defaultMenuItems.map((m) => (
        <SideBar.Item key={m.name} {...m} />
      ))}
    </SideBar>
  );

  const user = userEvent.setup();

  const createNewButton = screen.getByText(/create new/i);
  await user.click(createNewButton);

  expect(createNewFn).not.toBeCalled();
});

test('Disabled menu item doesnt fire event', async () => {
  render(
    <SideBar open>
      {defaultMenuItems.map((m, index) => (
        <SideBar.Item key={m.name} {...m} disabled={index === 0} />
      ))}
    </SideBar>
  );

  const user = userEvent.setup();

  const firstMenuItem = screen.getByText(defaultMenuItems[0].name);
  await user.click(firstMenuItem);

  expect(defaultMenuItems[0].onClick).not.toHaveBeenCalled();
});