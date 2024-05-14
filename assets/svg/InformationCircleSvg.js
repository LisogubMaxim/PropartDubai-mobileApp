import * as React from "react";
import Svg, { Path } from "react-native-svg";
const InformationCircleSvg = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <Path
            fill="#CFCFD3"
            d="M13 12a1 1 0 1 0-2 0h2Zm-2 4.8a1 1 0 1 0 2 0h-2Zm0-8.358a1 1 0 1 0 2 0h-2Zm2-.042a1 1 0 1 0-2 0h2ZM11 12v4.8h2V12h-2Zm2-3.558V8.4h-2v.042h2ZM3.4 12A8.6 8.6 0 0 1 12 3.4v-2C6.146 1.4 1.4 6.146 1.4 12h2ZM12 3.4a8.6 8.6 0 0 1 8.6 8.6h2c0-5.854-4.746-10.6-10.6-10.6v2Zm8.6 8.6a8.6 8.6 0 0 1-8.6 8.6v2c5.854 0 10.6-4.746 10.6-10.6h-2ZM12 20.6A8.6 8.6 0 0 1 3.4 12h-2c0 5.854 4.746 10.6 10.6 10.6v-2Z"
        />
    </Svg>
);
export default InformationCircleSvg;
