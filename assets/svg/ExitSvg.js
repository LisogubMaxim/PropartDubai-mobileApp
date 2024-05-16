import * as React from 'react';
import Svg, { Rect, G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ExitSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={48}
    fill="none"
    {...props}>
    <Rect
      width={23}
      height={23}
      x={11.737}
      y={20}
      stroke="#CFCFD3"
      rx={11.5}
      transform="rotate(-45 11.737 20)"
    />
    <G filter="url(#a)">
      <Path
        fill="#CFCFD3"
        d="M25.426 23.535 28 20.962l2.574 2.573a.684.684 0 0 0 .961 0 .684.684 0 0 0 0-.961L28.962 20l2.573-2.574a.684.684 0 0 0 0-.961.684.684 0 0 0-.961 0L28 19.038l-2.574-2.573a.684.684 0 0 0-.962 0 .684.684 0 0 0 0 .961L27.038 20l-2.574 2.574a.684.684 0 0 0 0 .961c.266.266.7.262.962 0Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default ExitSvg;
