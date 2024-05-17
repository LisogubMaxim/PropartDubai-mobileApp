import * as React from 'react';
import Svg, { G, Rect, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const FiltersBtnSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={98}
    height={108}
    fill="none"
    {...props}>
    <G filter="url(#a)">
      <Rect
        width={48}
        height={48}
        x={30}
        y={26}
        fill="#fff"
        rx={24}
        shapeRendering="crispEdges"
      />
      <Rect
        width={47}
        height={47}
        x={30.5}
        y={26.5}
        stroke="#F1F1F1"
        rx={23.5}
        shapeRendering="crispEdges"
      />
      <Path
        stroke="#6F707A"
        strokeLinecap="round"
        strokeWidth={1.6}
        d="M47.333 46.667h10m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM51.5 53.334h9.167m-9.167 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default FiltersBtnSvg;
