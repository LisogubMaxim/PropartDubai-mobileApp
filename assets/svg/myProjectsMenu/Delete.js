import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <Path
            fill="#6F707A"
            d="M17.667 6.667H15.6A3.339 3.339 0 0 0 12.333 4H11a3.34 3.34 0 0 0-3.267 2.667H5.667a.667.667 0 1 0 0 1.333h.666v8.667A3.337 3.337 0 0 0 9.667 20h4A3.337 3.337 0 0 0 17 16.667V8h.667a.667.667 0 1 0 0-1.333ZM11 5.333h1.333a2.004 2.004 0 0 1 1.886 1.334H9.114A2.004 2.004 0 0 1 11 5.333Zm4.667 11.334a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8h8v8.667Z"
        />
        <Path
            fill="#6F707A"
            d="M10.333 16a.666.666 0 0 0 .667-.667v-4a.667.667 0 1 0-1.333 0v4a.667.667 0 0 0 .666.667ZM13 16a.666.666 0 0 0 .667-.667v-4a.667.667 0 0 0-1.334 0v4A.667.667 0 0 0 13 16Z"
        />
    </Svg>
);
export default SvgComponent;
