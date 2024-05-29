import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const StorageRoomSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#333863"
        d="M18 20H6v2H4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2v-2Zm-7-6.126V17h2v-3.126A4.002 4.002 0 0 0 12 6a4 4 0 0 0-1 7.874ZM12 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default StorageRoomSvg
