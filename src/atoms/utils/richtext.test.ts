import { faker } from '@faker-js/faker';

import { richtext } from './richtext';

test('"extractImageUrls" works as expected', () => {
  const fakeUrl = faker.image.url();
  const fakeText = `<p>this is some text</p><img alt="${fakeUrl}" />`;

  const imgUrls = richtext.extractImageUrls(fakeText);

  expect(imgUrls).toHaveLength(1);
  expect(imgUrls[0]).toBe(fakeUrl);
});

test('"extractImageUrls" works as expected when passing undefined', () => {
  const imgUrls = richtext.extractImageUrls(undefined);

  expect(imgUrls).toHaveLength(0);
});

test('"imageToB64" works as expected', async () => {
  const fakeUrl = faker.image.url();
  const response = await fetch(fakeUrl);
  const blob = await response.blob();
  const file = new File([blob], `img`);
  const b64 = await richtext.imageToB64(file);

  expect(b64).not.toBe('');
});

test('"cleanRichTextValue" works as expected', () => {
  const fakeUrl = faker.image.url();
  const fakeText = `<p>this is some text</p><img src="${fakeUrl}" alt="${fakeUrl}">`;

  const cleaned = richtext.cleanRichTextValue(fakeText);

  expect(cleaned).not.toContain('src');
});
