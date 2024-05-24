import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const LineSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={1}
    fill="none"
    {...props}>
    <Path stroke="#CFCFD3" d="M0 .5h16" />
  </Svg>
);
export default LineSvg;
