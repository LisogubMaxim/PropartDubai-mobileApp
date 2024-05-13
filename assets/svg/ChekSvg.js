import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChekSvg = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <Path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.2 6.6 8.46 17.4 4.8 13.719" />
    </Svg>
);
export default ChekSvg;
