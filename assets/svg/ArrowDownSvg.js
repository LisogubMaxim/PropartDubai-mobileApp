import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowDownSvg = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" {...props}>
        <Path
            fill="#6F707A"
            d="M12.167 16a.945.945 0 0 0 .699-.329l5.712-6.09a.91.91 0 0 0 .255-.65c0-.516-.39-.931-.887-.931a.899.899 0 0 0-.646.282l-5.126 5.487-5.14-5.487A.917.917 0 0 0 6.386 8c-.496 0-.887.415-.887.932 0 .258.09.477.256.65l5.72 6.09c.202.218.428.328.69.328Z"
        />
    </Svg>
);
export default ArrowDownSvg;
