import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
        <Path
            fill="#6F707A"
            d="m18.49 5.932.527-.554c.266-.28.287-.666.02-.932l-.182-.19c-.238-.238-.638-.203-.897.057l-.547.533 1.08 1.086Zm-8.3 7.46 1.437-.603 6.352-6.352-1.08-1.073-6.352 6.36-.63 1.388c-.071.16.111.343.273.28Zm-2.665 4.704h8.168c1.346 0 2.139-.785 2.139-2.285V8.407l-1.403 1.395v5.883c0 .673-.357 1.01-.827 1.01H7.617c-.645 0-.996-.337-.996-1.01v-7.79c0-.673.35-1.01.996-1.01h5.952l1.395-1.401H7.525c-1.514 0-2.306.785-2.306 2.285v8.042c0 1.5.792 2.285 2.306 2.285Z"
        />
    </Svg>
);
export default SvgComponent;
