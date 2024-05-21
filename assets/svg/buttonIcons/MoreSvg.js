import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
const MoreSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={5}
    fill="none"
    {...props}>
    <Circle cx={2} cy={2} r={2} fill="#fff" />
    <Circle
      cx={8.011}
      cy={2.011}
      r={2}
      fill="#fff"
      transform="rotate(-.311 8.01 2.01)"
    />
    <Circle
      cx={14.032}
      cy={2.011}
      r={2}
      fill="#fff"
      transform="rotate(-.311 14.032 2.01)"
    />
  </Svg>
);
export default MoreSvg;
