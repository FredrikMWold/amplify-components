import '@testing-library/jest-dom/extend-expect';

import Settings, { ISettingsProps } from './Settings';
import { render, screen, userEvent } from '../../test-utils';

test('Settings renders as expected', async () => {
  const theme = 'light';
  const setTheme = jest.fn();
  const settingsOptions: ISettingsProps = {
    allSettings: [
      {
        title: 'Theme',
        type: theme,
        onChange: setTheme,
        items: [
          {
            label: 'Light Mode',
            name: 'theme-group',
            value: 'light',
          },
          {
            label: 'Dark Mode',
            name: 'theme-group',
            value: 'light',
            disabled: true,
          },
        ],
      },
    ],
  };

  render(<Settings allSettings={settingsOptions.allSettings} />);

  const user = userEvent.setup();

  const menuButton = screen.getByRole('button');

  await user.click(menuButton);

  const lightRadioButton = screen.getByRole('radio', { name: /light mode/i });

  expect(lightRadioButton).toBeChecked();
});

test('Radios are disabled according to prop', async () => {
  const theme = 'light';
  const setTheme = jest.fn();
  const settingsOptions: ISettingsProps = {
    allSettings: [
      {
        title: 'Theme',
        type: theme,
        onChange: setTheme,
        items: [
          {
            label: 'Light Mode',
            name: 'theme-group',
            value: 'light',
          },
          {
            label: 'Dark Mode',
            name: 'theme-group',
            value: 'light',
            disabled: true,
          },
        ],
      },
    ],
  };

  render(<Settings allSettings={settingsOptions.allSettings} />);

  const user = userEvent.setup();

  const menuButton = screen.getByRole('button');

  await user.click(menuButton);

  const darkRadioButton = screen.getByRole('radio', { name: /dark mode/i });

  expect(darkRadioButton).toBeDisabled();
});