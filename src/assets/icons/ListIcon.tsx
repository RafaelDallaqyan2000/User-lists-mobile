import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ListIcon = (props: any) => {
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
        d="M2 11.4c0-1.158.242-1.4 1.4-1.4h17.2c1.158 0 1.4.242 1.4 1.4v1.2c0 1.158-.242 1.4-1.4 1.4H3.4C2.242 14 2 13.758 2 12.6v-1.2ZM2 3.4C2 2.242 2.242 2 3.4 2h17.2c1.158 0 1.4.242 1.4 1.4v1.2c0 1.158-.242 1.4-1.4 1.4H3.4C2.242 6 2 5.758 2 4.6V3.4ZM2 19.4c0-1.158.242-1.4 1.4-1.4h17.2c1.158 0 1.4.242 1.4 1.4v1.2c0 1.158-.242 1.4-1.4 1.4H3.4C2.242 22 2 21.758 2 20.6v-1.2Z"
      />
    </Svg>
  );
};
