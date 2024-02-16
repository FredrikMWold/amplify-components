import { forwardRef } from 'react';

import ApplicationIconBase, { ShapeProps } from './ApplicationIconBase';
import { dasha } from './ApplicationIconCollection';
import { AppIconProps } from 'src/types/AppIcon';

const shapes: ShapeProps[] = [
  {
    top: -25,
    left: -20,
    rotation: -5,
  },
  {
    top: 12,
    left: 45,
    rotation: -70,
  },
];

const Dasha = forwardRef<HTMLDivElement, AppIconProps>(
  ({ size, iconOnly = false, withHover = true }, ref) => (
    <ApplicationIconBase
      size={size}
      iconData={dasha}
      shapes={shapes}
      iconOnly={iconOnly}
      withHover={withHover}
      ref={ref}
    />
  )
);

Dasha.displayName = 'Dasha';

export default Dasha;
