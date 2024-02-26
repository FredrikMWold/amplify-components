import { home } from '@equinor/eds-icons';
import { faker } from '@faker-js/faker';

import SideBarProvider from '../../../providers/SideBarProvider';
import { render, screen, userEvent } from '../../../tests/test-utils';
import MenuItem, { MenuItemProps } from './MenuItem';

function fakeProps(): MenuItemProps {
  return {
    currentUrl: faker.internet.url(),
    link: faker.internet.url(),
    icon: home,
    name: faker.person.jobTitle(),
    onClick: vi.fn() as any,
  };
}

test('MenuItem works as expected in light mode', async () => {
  const props = fakeProps();
  render(<MenuItem {...props} />, { wrapper: SideBarProvider });
  const user = userEvent.setup();

  const button = screen.getByTestId('sidebar-menu-item');

  await user.click(button);

  expect(props.onClick).toHaveBeenCalledTimes(1);
});

test('MenuItem text renders as correctly when open and active', () => {
  window.localStorage.setItem(
    'amplify-sidebar-state',
    JSON.stringify({ isOpen: true })
  );
  const props = fakeProps();
  render(<MenuItem {...props} currentUrl={props.link} />, {
    wrapper: SideBarProvider,
  });
  const itemText = screen.getByText(props.name);

  expect(itemText).toHaveStyleRule('font-weight', '500');
});

test('Active MenuItem doesnt fire onClick when pressed', async () => {
  const props = fakeProps();
  render(<MenuItem {...props} currentUrl={props.link} />, {
    wrapper: SideBarProvider,
  });
  const user = userEvent.setup();

  const button = screen.getByTestId('sidebar-menu-item');

  await user.click(button);

  expect(props.onClick).toHaveBeenCalledTimes(0);
});

test('Disabled MenuItem doesnt fire onClick when pressed', async () => {
  const props = fakeProps();
  const { rerender } = render(<MenuItem {...props} disabled />, {
    wrapper: SideBarProvider,
  });
  const user = userEvent.setup();

  const button = screen.getByTestId('sidebar-menu-item');

  await user.click(button);

  expect(props.onClick).toHaveBeenCalledTimes(0);

  rerender(<MenuItem theme="dark" {...props} disabled />);

  await user.click(button);

  expect(props.onClick).toHaveBeenCalledTimes(0);
});
