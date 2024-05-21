import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SearchSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#6F707A"
      d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1.002 1.002 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
    />
  </Svg>
);
export default SearchSvg;
