import * as React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const BurgerBtnSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={54}
    fill="none"
    {...props}>
    <G fill="#6F707A" filter="url(#a)">
      <Path d="M39.167 22.125H20.833c-.46 0-.833.392-.833.875s.373.875.833.875h18.334c.46 0 .833-.392.833-.875s-.373-.875-.833-.875ZM39.167 16H20.833c-.46 0-.833.392-.833.875s.373.875.833.875h18.334c.46 0 .833-.392.833-.875S39.627 16 39.167 16ZM39.167 28.25H20.833c-.46 0-.833.392-.833.875s.373.875.833.875h18.334c.46 0 .833-.392.833-.875s-.373-.875-.833-.875Z" />
    </G>
    <Defs></Defs>
  </Svg>
);
export default BurgerBtnSvg;
