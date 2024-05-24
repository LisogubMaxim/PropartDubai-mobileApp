import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CheckedIconSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={10}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.8 1.4 3.64 8.6 1.2 6.146"
    />
  </Svg>
);
export default CheckedIconSvg;
