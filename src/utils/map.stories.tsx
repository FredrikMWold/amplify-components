import { Meta, Story } from '@storybook/react';

import UtilStory from './UtilStory';

export default {
  title: 'Other/Utils/Map',
} as Meta;

export const distanceLatLng: Story = () => {
  const codeText = `
  distanceLatLng(
    x: LatLngLiteral,
    y: LatLngLiteral
  )
  => returns distance in km between two lat lng points
  `;
  return <UtilStory name="distanceLatLng" codeText={codeText} />;
};

export const utmProjection: Story = () => {
  const codeText = `
  utmProjection => proj64 string for Johan Sverdrup map projection
  `;
  return <UtilStory name="utmProjection" codeText={codeText} />;
};

export const convertUtmToLatLng: Story = () => {
  const codeText = `
  convertUtmToLatLng(
    x: string | number,
    y: string | number
  )
  => returns lat lng object with correct coordinates
  `;
  return <UtilStory name="convertUtmToLatLng" codeText={codeText} />;
};

export const convertLatLngToUtm: Story = () => {
  const codeText = `
  convertUtmToLatLng(
    coordinate: LatLngLiteral
  )
  => returns [x (UTM x value), Y (UTM y value)]
  `;
  return <UtilStory name="convertLatLngToUtm" codeText={codeText} />;
};
