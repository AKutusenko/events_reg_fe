import React, { SVGProps } from 'react';

const Icon: React.FC<SVGProps<SVGSVGElement>> = ({ color, ...props }) => (
  <svg width="15" height="14" viewBox="0 0 15 14" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.96055 2.32033C7.25848 2.02669 7.74152 2.02669 8.03945 2.32033L10.775 5.01651C11.2556 5.49019 10.9152 6.3001 10.2356 6.3001H4.76442C4.08476 6.3001 3.74438 5.49019 4.22498 5.01651L6.96055 2.32033Z"
      fill={color}
    />
    <path
      d="M6.96055 11.6799C7.25848 11.9735 7.74152 11.9735 8.03945 11.6799L10.775 8.98369C11.2556 8.51001 10.9152 7.7001 10.2356 7.7001H4.76442C4.08476 7.7001 3.74438 8.51001 4.22498 8.98369L6.96055 11.6799Z"
      fill={color}
    />
  </svg>
);

export default React.memo(Icon);
