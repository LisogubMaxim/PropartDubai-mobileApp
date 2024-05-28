import * as React from "react"
import Svg, { Path } from "react-native-svg"
const GreenAreasSvg = (props) => (
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
      d="M15.982 4.096a4.5 4.5 0 0 0-8.963-.01C4.727 4.498 3 6.318 3 8.5c0 .997.36 1.919.97 2.665C2.767 12.082 2 13.46 2 15c0 2.761 2.462 5 5.5 5a5.853 5.853 0 0 0 3.205-.936v3.07a1 1 0 1 0 2 0V19a1 1 0 0 0-2-.015v-1.972a1.003 1.003 0 0 1-.118-.086l-2.302-1.952a1 1 0 1 1 1.293-1.525l1.127.955V7.944a1 1 0 1 1 2 0v4.31l1.187-1.085a1 1 0 1 1 1.35 1.475l-2.537 2.32v4.343c.819.44 1.775.693 2.795.693 3.038 0 5.5-2.239 5.5-5 0-1.392-.626-2.652-1.636-3.558a5.002 5.002 0 0 0-3.382-7.345Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default GreenAreasSvg
