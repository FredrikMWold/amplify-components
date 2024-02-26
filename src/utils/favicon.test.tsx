import { faker } from '@faker-js/faker';

import { render } from '../tests/test-utils';
import favicon from './favicon';

const lightId = 'light';
const darkId = 'dark';
test('setupFavicon works as expected', () => {
  const lightImg = faker.image.url({ width: 64, height: 64 });
  const darkImg = faker.image.url({ width: 64, height: 64 });
  render(
    <div>
      <link
        rel="icon"
        id={lightId}
        href={lightImg}
        sizes="64x64"
        type="image/png"
      />
      <link
        rel="icon"
        id={darkId}
        href={darkImg}
        sizes="64x64"
        type="image/png"
      />
    </div>
  );

  const light = document.querySelector(`#${lightId}`)!;
  document.head.appendChild(light);
  const dark = document.querySelector(`#${darkId}`)!;
  document.head.appendChild(dark);

  import.meta.env.DARK = 'false';
  favicon.setupIcons(lightId, darkId);

  expect(document.head.children.length).toBe(1);
  expect(document.head.querySelector(`#${lightId}`)).toBeInTheDocument();
});

test('setupFavicon works as expected when in dark mode', () => {
  const lightImg = faker.image.url({ width: 64, height: 64 });
  const darkImg = faker.image.url({ width: 64, height: 64 });
  render(
    <div>
      <link
        rel="icon"
        id={lightId}
        href={lightImg}
        sizes="64x64"
        type="image/png"
      />
      <link
        rel="icon"
        id={darkId}
        href={darkImg}
        sizes="64x64"
        type="image/png"
      />
    </div>
  );

  const light = document.querySelector(`#${lightId}`)!;
  document.head.appendChild(light);
  const dark = document.querySelector(`#${darkId}`)!;
  document.head.appendChild(dark);

  import.meta.env.DARK = 'true';

  favicon.setupIcons(lightId, darkId);

  expect(document.head.children.length).toBe(1);
  expect(document.head.querySelector(`#${darkId}`)).toBeInTheDocument();
});
