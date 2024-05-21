import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SettingsSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      stroke="#6F707A"
      strokeLinecap="round"
      strokeWidth={1.6}
      d="M3.333 6.667h10m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM7.5 13.334h9.167m-9.167 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </Svg>
);
export default SettingsSvg;
