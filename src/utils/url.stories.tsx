import { Meta, StoryFn } from '@storybook/react';

import UtilStory from './UtilStory';

export default {
  title: 'Other/Utils/Url',
} as Meta;

export const IsValidUrl: StoryFn = () => {
  const codeText = `
  isValidUrl(
    url: string
  )
  => return true/false if an url is valid
  `;
  return <UtilStory name="isValidUrl" codeText={codeText} />;
};
