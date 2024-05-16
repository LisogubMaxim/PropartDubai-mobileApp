import * as React from "react";
import Svg, { G, Mask, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height={135}
        preserveAspectRatio="none"
        viewBox="0 0 390 130"
        fill="none"
        {...props}
    >
        <G filter="url(#a)">
            <Mask id="b" fill="#fff">
                <Path
                    fillRule="evenodd"
                    d="M155 34H0v97h390V34H235h32c-17.965.454-31.493 13.137-38.046 21.572-7.065 11.316-19.63 18.845-33.954 18.845-14.324 0-26.889-7.529-33.954-18.845C154.493 47.137 140.965 34.454 123 34h32Z"
                    clipRule="evenodd"
                />
            </Mask>
            <Path
                fill="#fff"
                fillRule="evenodd"
                d="M155 34H0v97h390V34H235h32c-17.965.454-31.493 13.137-38.046 21.572-7.065 11.316-19.63 18.845-33.954 18.845-14.324 0-26.889-7.529-33.954-18.845C154.493 47.137 140.965 34.454 123 34h32Z"
                clipRule="evenodd"
            />
            <Path
                fill="#F1F1F1"
                d="M0 34v-1h-1v1h1Zm155 0h1v-1h-1v1ZM0 131h-1v1h1v-1Zm390 0v1h1v-1h-1Zm0-97h1v-1h-1v1Zm-155 0v-1h-1v1h1Zm0 0h-1v1h1v-1Zm32 0 .025 1-.025-2v1Zm-38.046 21.572-.789-.614-.032.04-.027.044.848.53Zm-67.908 0 .848-.53-.027-.043-.032-.04-.789.613ZM123 34v-1l-.025 2 .025-1Zm32 0v1h1v-1h-1ZM0 35h155v-2H0v2Zm1 96V34h-2v97h2Zm389-1H0v2h390v-2Zm-1-96v97h2V34h-2Zm-154 1h155v-2H235v2Zm-1-1h2-2Zm1 1h32v-2h-32v2Zm31.975-2c-18.418.466-32.194 13.442-38.81 21.958l1.579 1.227c6.489-8.352 19.768-20.743 37.281-21.185l-.05-2Zm-38.869 22.042c-6.89 11.036-19.141 18.375-33.106 18.375v2c14.683 0 27.562-7.719 34.803-19.316l-1.697-1.059ZM195 73.417c-13.965 0-26.216-7.339-33.106-18.375l-1.697 1.06c7.241 11.596 20.12 19.315 34.803 19.315v-2Zm-33.165-18.459c-6.616-8.516-20.392-21.492-38.81-21.957l-.05 1.999c17.513.442 30.792 12.833 37.281 21.185l1.579-1.227ZM123 35h32v-2h-32v2Zm33-1h-2 2Z"
                mask="url(#b)"
            />
        </G>
        <Defs></Defs>
    </Svg>
);
export default SvgComponent;
