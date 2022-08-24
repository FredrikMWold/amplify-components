import { Meta, Story } from '@storybook/react';
import { dashboard, favorite_outlined, history } from '@equinor/eds-icons';

import { MenuItemType } from './MenuItem';
import SideBar from '.';

export default {
  title: 'Navigation/SideBar',
  body: `
    Supports not having a create action if it isn't needed. Saves current open-state to localStorage with: 'amplify-sidebar-state: boolean'.
   
  `,
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Primary: Story = () => {
  const menuItems: MenuItemType[] = [
    {
      name: 'Dashboard',
      icon: dashboard,
      link: 'dashboard',
      onClick: () => console.log('going to dashboard...'),
    },
    {
      name: 'history',
      icon: history,
      link: 'history',
      onClick: () => console.log('going to history...'),
    },
    {
      name: 'favourites',
      icon: favorite_outlined,
      link: 'favourites',
      onClick: () => console.log('going to favourites...'),
    },
  ];

  return (
    <div style={{ display: 'flex', height: '95vh' }}>
      <SideBar
        createLabel="Create story"
        onCreate={() => console.log('Created 🖋')}
      >
        {menuItems.map((m) => (
          <SideBar.Item key={m.name} {...m} />
        ))}
      </SideBar>
    </div>
  );
};

export const NoCreateAction: Story = () => {
  const menuItems: MenuItemType[] = [
    {
      name: 'Dashboard',
      icon: dashboard,
      link: 'dashboard',
      onClick: () => console.log('going to dashboard...'),
    },
    {
      name: 'history',
      icon: history,
      link: 'history',
      onClick: () => console.log('going to history...'),
    },
    {
      name: 'favourites',
      icon: favorite_outlined,
      link: 'favourites',
      onClick: () => console.log('going to favourites...'),
    },
  ];

  return (
    <div style={{ display: 'flex', height: '95vh' }}>
      <SideBar>
        {menuItems.map((m) => (
          <SideBar.Item key={m.name} {...m} />
        ))}
      </SideBar>
    </div>
  );
};

export const WithCreateAction: Story = () => {
  const menuItems: MenuItemType[] = [
    {
      name: 'Dashboard',
      icon: dashboard,
      link: 'dashboard',
      onClick: () => console.log('going to dashboard...'),
    },
    {
      name: 'history',
      icon: history,
      link: 'history',
      onClick: () => console.log('going to history...'),
    },
    {
      name: 'favourites',
      icon: favorite_outlined,
      link: 'favourites',
      onClick: () => console.log('going to favourites...'),
    },
  ];

  return (
    <div style={{ display: 'flex', height: '95vh' }}>
      <SideBar
        createLabel="Create a diamond"
        onCreate={() => console.log('Created 💎')}
      >
        {menuItems.map((m) => (
          <SideBar.Item key={m.name} {...m} />
        ))}
      </SideBar>
    </div>
  );
};

export const WithCurrentUrlAndCreate: Story = () => {
  const menuItems: MenuItemType[] = [
    {
      name: 'Dashboard',
      icon: dashboard,
      link: 'dashboard',
      onClick: () => console.log('going to dashboard...'),
    },
    {
      name: 'history',
      icon: history,
      link: 'history',
      onClick: () => console.log('going to history...'),
    },
    {
      name: 'favourites',
      icon: favorite_outlined,
      link: 'favourites',
      onClick: () => console.log('going to favourites...'),
    },
  ];

  return (
    <div style={{ display: 'flex', height: '95vh' }}>
      <SideBar
        createLabel="Create story"
        onCreate={() => console.log('Created 🖋')}
      >
        {menuItems.map((m) => (
          <SideBar.Item key={m.name} {...m} />
        ))}
      </SideBar>
    </div>
  );
};

export const WithDisabledMenuItem: Story = () => {
  const menuItems: MenuItemType[] = [
    {
      name: 'Dashboard',
      icon: dashboard,
      link: 'dashboard',
      onClick: () => console.log('going to dashboard...'),
    },
    {
      name: 'history',
      icon: history,
      link: 'history',
      onClick: () => console.log('going to history...'),
    },
    {
      name: 'favourites',
      icon: favorite_outlined,
      link: 'favourites',
      onClick: () => console.log('going to favourites...'),
    },
  ];

  return (
    <div style={{ display: 'flex', height: '95vh' }}>
      <SideBar
        createLabel="Create story"
        onCreate={() => console.log('Created 🖋')}
      >
        {menuItems.map((m) => (
          <SideBar.Item key={m.name} {...m} disabled={m.link === 'history'} />
        ))}
      </SideBar>
    </div>
  );
};

export const WithDisabledCreateButton: Story = () => {
  const menuItems: MenuItemType[] = [
    {
      name: 'Dashboard',
      icon: dashboard,
      link: 'dashboard',
      onClick: () => console.log('going to dashboard...'),
    },
    {
      name: 'history',
      icon: history,
      link: 'history',
      onClick: () => console.log('going to history...'),
    },
    {
      name: 'favourites',
      icon: favorite_outlined,
      link: 'favourites',
      onClick: () => console.log('going to favourites...'),
    },
  ];

  return (
    <div style={{ display: 'flex', height: '95vh' }}>
      <SideBar
        createLabel="Create story"
        onCreate={() => console.log('Created 🖋')}
        createDisabled
      >
        {menuItems.map((m) => (
          <SideBar.Item key={m.name} {...m} />
        ))}
      </SideBar>
    </div>
  );
};