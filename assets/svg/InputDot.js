import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
const InputDot = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={8}
    fill="none"
    {...props}>
    <Circle cx={4.25} cy={4} r={4} fill="#B7B8BC" />
  </Svg>
);
export default InputDot;
