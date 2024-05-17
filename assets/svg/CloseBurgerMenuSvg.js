import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" {...props}>
        <Path
            fill="#6F707A"
            d="M8.314 17.935c-.37.369-.387 1.028.008 1.406.378.395 1.046.378 1.415.009L14 15.087l4.263 4.263c.378.377 1.028.386 1.406-.01.396-.377.387-1.036.009-1.414l-4.263-4.263 4.263-4.254c.378-.387.387-1.037-.009-1.415-.378-.395-1.028-.387-1.406-.009L14 12.248 9.737 7.985c-.369-.369-1.037-.386-1.415.01-.395.377-.378 1.036-.008 1.405l4.262 4.263-4.262 4.272Z"
        />
    </Svg>
);
export default SvgComponent;
