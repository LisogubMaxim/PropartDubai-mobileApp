import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CloseCrossSvg = ({ color = "#6F707A" }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <Path
            fill={color}
            d="M7.126 15.373c-.317.316-.332.88.007 1.205.324.339.897.324 1.213.007L12 12.932l3.654 3.653a.855.855 0 0 0 1.205-.007c.34-.324.331-.89.008-1.213l-3.654-3.654 3.654-3.646c.323-.331.331-.889-.008-1.213a.855.855 0 0 0-1.205-.007L12 10.498 8.346 6.845c-.316-.317-.889-.332-1.213.007-.339.324-.324.89-.007 1.205l3.654 3.654-3.654 3.662Z"
        />
    </Svg>
);
export default CloseCrossSvg;
