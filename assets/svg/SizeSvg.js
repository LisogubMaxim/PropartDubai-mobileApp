import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SizeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#333863"
      fillRule="evenodd"
      d="M1 3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3Zm15.203 5.324V4.346a.562.562 0 0 0-.048-.214.563.563 0 0 0-.302-.303.563.563 0 0 0-.215-.047h-3.977a.565.565 0 0 0 0 1.13l2.621-.005-3.019 3.02a.562.562 0 1 0 .796.795l3.019-3.02-.005 2.622a.562.562 0 0 0 .782.522.563.563 0 0 0 .348-.522ZM4.346 16.203h3.978a.562.562 0 0 0 .522-.781.562.562 0 0 0-.522-.349l-2.621.004 3.019-3.019a.562.562 0 1 0-.796-.795l-3.019 3.019.004-2.621a.565.565 0 1 0-1.13 0v3.977a.562.562 0 0 0 .048.215.562.562 0 0 0 .303.302c.067.03.14.046.214.048Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SizeSvg
