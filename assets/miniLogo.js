import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function MiniLogoSVG(props) {
  return (
    <Svg
      width={29}
      height={39}
      viewBox="0 0 29 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={0.404855}
        y={0.979491}
        width={12.7267}
        height={25.723}
        rx={6.36334}
        transform="rotate(22.5 -12.787 31.032) skewX(-.086)"
        fill="#F85858"
        stroke="#FE9696"
        strokeWidth={1.5}
      />
      <Path
        d="M21.618 12.417l-.092-.553c-.297-1.786-1.868-3.157-3.813-3.33v0M23.514 11.98l-.242-.742c-.731-2.244-2.688-3.966-5.147-4.53v0M25.87 11.48l-.37-.888c-1.085-2.594-3.36-4.61-6.21-5.501v0"
        stroke="#FA5454"
      />
      <Path
        d="M4.688 19.946l1.052-.16a13.138 13.138 0 0113.027 5.87v0"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default MiniLogoSVG
