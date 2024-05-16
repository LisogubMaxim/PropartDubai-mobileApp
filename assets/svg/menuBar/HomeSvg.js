import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={48} height={56} fill="none" {...props}>
        <Path
            stroke="#6F707A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.2 33.4h9.6m-5.542-14.774-8.32 5.626a1.2 1.2 0 0 0-.538.992v10.53c0 1.009.86 1.826 1.92 1.826h15.36c1.06 0 1.92-.817 1.92-1.825v-10.53a1.2 1.2 0 0 0-.538-.993l-8.32-5.626c-.444-.3-1.04-.3-1.484 0Z"
        />
    </Svg>
);
export default SvgComponent;
