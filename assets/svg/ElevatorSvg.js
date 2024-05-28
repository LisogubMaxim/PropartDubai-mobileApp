import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ElevatorSvg = (props) => (
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
      d="M3 3a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3Zm9.415 2.037a.8.8 0 0 0-1.23 0l-3.792 4.55a.8.8 0 0 0 .615 1.313h7.584a.8.8 0 0 0 .614-1.312l-3.791-4.55ZM11.208 19.05a.8.8 0 0 0 1.184 0l3.692-4.06a.8.8 0 0 0-.592-1.339H8.108a.8.8 0 0 0-.592 1.338l3.692 4.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ElevatorSvg
