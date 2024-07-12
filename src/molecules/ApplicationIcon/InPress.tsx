import { forwardRef } from 'react';

import { ApplicationIconBase, ShapeProps } from './ApplicationIconBase';
import { inPress } from './ApplicationIconCollection';
import { AppIconProps } from 'src/atoms/types';

const shapes: ShapeProps[] = [
  {
    top: -31,
    left: -17,
    rotation: 343,
  },
  {
    top: 42,
    left: 32,
    rotation: 182,
  },
];

export const InPress = forwardRef<HTMLDivElement, AppIconProps>(
  (props, ref) => (
    <ApplicationIconBase
      ref={ref}
      iconData={inPress}
      shapes={shapes}
      {...props}
    />
  )
);

InPress.displayName = 'InPress';
