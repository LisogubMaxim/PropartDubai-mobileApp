import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const HeartFillSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M13.72 23c.25 0 .615-.192.913-.384 5.37-3.458 8.808-7.511 8.808-11.613C23.44 7.46 20.99 5 17.927 5c-1.911 0-3.342 1.057-4.207 2.632C12.875 6.057 11.434 5 9.523 5 6.449 5 4 7.459 4 11.003c0 4.102 3.448 8.155 8.808 11.613.298.192.663.384.912.384Z"
    />
  </Svg>
);
export default HeartFillSvg;
