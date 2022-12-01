import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MenuIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_434)">
        <Path
          d="M3 18h11v-2H3v2zm0-5h15v-2H3v2zm0-7v2h18V6H3z"
          fill="#072D4B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_434">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MenuIcon
