import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const DetailsIcon = (props: any) => {
  const {isActive} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill={isActive ? '#FFA001' : 'none'}
      color={isActive ? '#FFA001' : '#FFF'}
      {...props}>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 21c-4.714 0-7.071 0-8.536-1.465C2 18.072 2 15.714 2 11V7.944c0-1.816 0-2.724.38-3.406A3 3 0 0 1 3.538 3.38C4.22 3 5.128 3 6.944 3 8.108 3 8.69 3 9.2 3.191c1.163.436 1.643 1.493 2.168 2.542L12 7M8 7h8.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827C22 9.09 22 10.143 22 12.25"
      />
      <Path
        stroke={isActive ? '#FFA001' : '#FFF'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 15h-7m7 3h-7m2.5 3H15"
      />
    </Svg>
  );
};
