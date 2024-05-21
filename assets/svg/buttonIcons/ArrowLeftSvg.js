import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ArrowLeftSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M4.866 11.697c0 .226.098.452.27.617l4.973 4.965c.18.173.377.256.595.256.475 0 .821-.339.821-.799a.8.8 0 0 0-.248-.595l-1.695-1.717-2.185-1.997 1.755.106h9.13c.498 0 .845-.347.845-.836 0-.498-.347-.844-.844-.844h-9.13l-1.748.105 2.177-1.996 1.695-1.718a.8.8 0 0 0 .248-.595c0-.46-.346-.798-.82-.798-.22 0-.423.082-.619.27l-4.95 4.95a.867.867 0 0 0-.27.626Z"
    />
  </Svg>
);
export default ArrowLeftSvg;
