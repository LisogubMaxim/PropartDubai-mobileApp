import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PriceSvg = (props) => (
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
      d="M11.284 2.192a1.591 1.591 0 0 0-.882-.673l.561-.821a1.6 1.6 0 0 1 2.343-.33l4.069 3.375a1.6 1.6 0 0 1 .563 1.009l1.644 11.702a1.6 1.6 0 0 1-1.361 1.807l-5.878.826 1.992-11.295a1.6 1.6 0 0 0-.224-1.133l-2.827-4.467Zm-7.785 2.88 4.12-2.863a1.6 1.6 0 0 1 2.22.391l2.892 4.1a1.6 1.6 0 0 1 .268 1.2l-1.812 10.275a1.6 1.6 0 0 1-1.853 1.298l-7.012-1.236a1.6 1.6 0 0 1-1.297-1.853L2.836 6.108A1.6 1.6 0 0 1 3.5 5.072Zm5.69.493a.938.938 0 1 1-1.875 0 .938.938 0 0 1 1.876 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default PriceSvg
