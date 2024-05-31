import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ color = "#fff" }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <Path
            fill={color}
            d="M4.866 11.696c0 .226.098.452.271.618l4.973 4.965c.18.173.376.256.595.256.474 0 .82-.34.82-.799a.8.8 0 0 0-.248-.595l-1.695-1.718-2.185-1.996 1.756.105h9.13c.498 0 .844-.346.844-.836 0-.497-.346-.844-.844-.844h-9.13l-1.748.106 2.177-1.996 1.695-1.718a.8.8 0 0 0 .249-.595c0-.46-.347-.799-.821-.799-.219 0-.422.083-.618.271l-4.95 4.95a.868.868 0 0 0-.27.625Z"
        />
    </Svg>
);
export default SvgComponent;
