import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UploadSVG(props) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 17h.01m-1.41-3H18c.932 0 1.398 0 1.765.152a2 2 0 011.083 1.083C21 15.602 21 16.068 21 17c0 .932 0 1.398-.152 1.765a2 2 0 01-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 01-1.083-1.083C3 18.398 3 17.932 3 17c0-.932 0-1.398.152-1.765a2 2 0 011.083-1.083C4.602 14 5.068 14 6 14h2.4m3.6 1V4m0 0l3 3m-3-3L9 7"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default UploadSVG
