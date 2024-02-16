import { faker } from '@faker-js/faker';

import { Account, AccountProps } from './Account';
import { render, screen, userEvent } from 'src/tests/test-utils';

function fakeProps(withAvatar = false): AccountProps {
  return {
    account: {
      homeAccountId: faker.string.uuid(),
      environment: faker.lorem.word(),
      tenantId: faker.string.uuid(),
      username: faker.internet.userName(),
      name: faker.animal.dog(),
      localAccountId: faker.string.uuid(),
    },
    logout: vi.fn(),
    roles: [faker.animal.fish()],
    photo: withAvatar ? faker.image.avatar() : undefined,
  };
}

test('Renders correctly without avatar', async () => {
  const props = fakeProps();
  const user = userEvent.setup();
  render(<Account {...props} />);

  const accountName = props.account?.name ?? 'failed failed';
  expect(screen.queryByText(accountName)).not.toBeInTheDocument();

  const button = screen.getByRole('button');

  const expectedInitials = (accountName: string) => {
    const defaultName = 'XX';
    if (!accountName) return defaultName;

    const nameWithoutParenthesis = accountName
      .replace(/ *\([^)]*\) */g, '')
      .toUpperCase();
    const splitNames = nameWithoutParenthesis.split(' ');

    if (splitNames.length === 1 && splitNames[0] !== '') {
      return splitNames[0].charAt(0);
    }

    if (splitNames.length >= 2) {
      return (
        splitNames[0].charAt(0) + splitNames[splitNames.length - 1].charAt(0)
      );
    }

    return defaultName;
  };

  expect(screen.getByText(expectedInitials(accountName))).toBeInTheDocument();

  await user.click(button);

  expect(screen.getByText(accountName)).toBeInTheDocument();

  expect(screen.getByText(props.roles?.[0] || '')).toBeInTheDocument();

  expect(
    screen.getByText(props.account?.username ?? 'failed')
  ).toBeInTheDocument();

  const closeButton = screen.getByTestId('close-button');

  await user.click(closeButton);

  expect(screen.queryByText(accountName)).not.toBeInTheDocument();
});

test('Renders correctly with avatar', async () => {
  const props = fakeProps(true);
  const user = userEvent.setup();
  render(<Account {...props} />);

  const accountName = props.account?.name ?? 'failed failed';
  expect(screen.queryByText(accountName)).not.toBeInTheDocument();

  const button = screen.getByRole('button');

  expect(screen.getByAltText(`user-avatar-${accountName}`)).toBeInTheDocument();

  await user.click(button);

  expect(screen.getByText(props.roles?.[0] || '')).toBeInTheDocument();
  expect(screen.getAllByAltText(`user-avatar-${accountName}`).length).toBe(2);

  const closeButton = screen.getByTestId('close-button');

  await user.click(closeButton);

  expect(screen.queryByText(accountName)).not.toBeInTheDocument();
});

test('Opens and closes as it should', async () => {
  const props = fakeProps(true);
  const user = userEvent.setup();
  render(<Account {...props} />);

  const button = screen.getByRole('button');

  expect(
    screen.getAllByAltText(`user-avatar-${props.account?.name}`).length
  ).toBe(1);

  await user.click(button);

  expect(
    screen.getAllByAltText(`user-avatar-${props.account?.name}`).length
  ).toBe(2);

  await user.click(button);

  expect(
    screen.getAllByAltText(`user-avatar-${props.account?.name}`).length
  ).toBe(1);
});

test('Rendering custom button works as expected', async () => {
  const props = fakeProps(true);
  const customButtonText = faker.animal.cetacean();
  const user = userEvent.setup();
  render(
    <Account
      {...props}
      renderCustomButton={(buttonRef, handleToggle) => (
        <button ref={buttonRef} onClick={handleToggle}>
          {customButtonText}
        </button>
      )}
    />
  );

  const customButton = screen.getByText(customButtonText);

  expect(customButton).toBeInTheDocument();

  await user.click(customButton);

  expect(
    screen.getByAltText(`user-avatar-${props.account?.name}`)
  ).toBeInTheDocument();

  await user.click(customButton);

  expect(
    screen.queryByAltText(`user-avatar-${props.account?.name}`)
  ).not.toBeInTheDocument();
});
