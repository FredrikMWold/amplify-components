import {
  error_outlined,
  IconData,
  info_circle,
  warning_outlined,
} from '@equinor/eds-icons';

import { BannerProps } from './Banner';

export function getVariantIcon(variant: BannerProps['variant']): IconData {
  switch (variant) {
    case 'info':
      return info_circle;
    case 'warning':
      return warning_outlined;
    case 'danger':
      return error_outlined;
  }
}
