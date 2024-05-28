import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ConciergeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#333863"
      fillRule="evenodd"
      d="M10.333 3a1 1 0 0 0 0 2h3.334a1 1 0 1 0 0-2h-3.334Zm12.334 13.333c0-5.891-4.776-10.667-10.667-10.667S1.333 10.442 1.333 16.333h21.334ZM0 18.667a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-.666Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ConciergeSvg
