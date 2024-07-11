import { FullPageSpinner } from 'src/molecules/FullPageSpinner/FullPageSpinner';
import { render, screen } from 'src/tests/test-utils';

test('renders scrim version by default', () => {
  const { container } = render(<FullPageSpinner></FullPageSpinner>);

  expect(container.firstElementChild?.className).toContain('Scrim');
});

test('renders without scrim when prop is given', () => {
  render(<FullPageSpinner withoutScrim></FullPageSpinner>);

  expect(screen.getAllByRole('generic')[1]).toHaveStyleRule(
    'background-color',
    undefined
  );
});

test('renders star progress as default', () => {
  render(<FullPageSpinner withoutScrim></FullPageSpinner>);

  expect(screen.getByRole('progressbar').getAttribute('class')).toContain(
    'StarProgress'
  );
});

test('renders circle when prop is given', () => {
  render(<FullPageSpinner withoutScrim variant="circle"></FullPageSpinner>);

  expect(screen.getByRole('progressbar').getAttribute('class')).toContain(
    'CircularProgress'
  );
});

test('renders dots when prop is given', () => {
  render(<FullPageSpinner withoutScrim variant="dots"></FullPageSpinner>);

  expect(screen.getByRole('progressbar').getAttribute('class')).toContain(
    'Dot'
  );
});
