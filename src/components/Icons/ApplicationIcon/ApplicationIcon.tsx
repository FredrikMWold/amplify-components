import { FC } from 'react';

import Fallback from '../Fallback';
import { SvgIconProps } from '../index';
import Acquire from './Acquire';
import Dasha from './Dasha';
import FourDInsight from './FourDInsight';
import Portal from './Portal';
import Recap from './Recap';

export interface ApplicationIconProps {
  name:
    | 'acquire'
    | '4dinsight'
    | 'recap'
    | 'dasha'
    | 'portal'
    | 'default'
    | string;
  size?: 16 | 24 | 32 | 40 | 48 | 96;
}
interface IApplicationIconData {
  appName: string;
  component: FC<SvgIconProps>;
}
const apps: IApplicationIconData[] = [
  { appName: 'default', component: Fallback },
  { appName: 'portal', component: Portal },
  { appName: 'acquire', component: Acquire },
  { appName: '4dinsight', component: FourDInsight },
  { appName: 'dasha', component: Dasha },
  { appName: 'recap', component: Recap },
];

const ApplicationIcon: FC<ApplicationIconProps> = ({ name, size }) => {
  const Fallback = apps[0].component;
  if (name) {
    const appData = apps.find((app) => app.appName === name);
    if (appData) {
      return <appData.component size={size} />;
    }

    return <Fallback size={size} />;
  }

  console.warn(
    `Unable to find app icon with name ${name}, returning default icon`
  );
  return <Fallback size={size} />;
};

export default ApplicationIcon;