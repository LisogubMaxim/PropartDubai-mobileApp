import * as React from 'react';
import Svg, { Rect, G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PlusSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={53}
    height={50}
    fill="none"
    {...props}>
    <Rect width={23} height={23} x={16.5} y={9.5} stroke="#CFCFD3" rx={11.5} />
    <G filter="url(#a)">
      <Path
        fill="#CFCFD3"
        d="M23.68 21.68h3.64v3.64c0 .37.304.68.68.68.376 0 .68-.31.68-.68v-3.64h3.64c.37 0 .68-.304.68-.68 0-.376-.31-.68-.68-.68h-3.64v-3.64c0-.37-.304-.68-.68-.68-.376 0-.68.31-.68.68v3.64h-3.64c-.37 0-.68.304-.68.68 0 .376.31.68.68.68Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default PlusSvg;
