import * as React from 'react';

import { Colors } from '@/enums';

import { icons, IconTypes } from './icons';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconTypes;
}

export const SVGIcon = ({
  name,
  width = 24,
  height = 24,
  color = Colors.YELLOW,
  ...rest
}: IconProps): JSX.Element => {
  const Icon = icons[name] || icons.search;

  return <Icon width={width} height={height} color={color} {...rest} />;
};

export { type IconTypes };
