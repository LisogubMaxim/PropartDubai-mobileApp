import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <Rect width={16} height={16} fill="#F14336" rx={8} />
        <Path stroke="#fff" strokeLinecap="round" strokeWidth={1.2} d="m11 5-6 6m6 0L5 5" />
    </Svg>
);
export default SvgComponent;
