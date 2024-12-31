import * as React from "react"
import Svg, { G, Path, Rect, Ellipse, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function LogoSVG(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={361}
      height={500}
      viewBox="0 0 361 500"
      fill="none"
      {...props}
    >
      <G filter="url(#filter0_d_111_1196)" stroke="#FA5454">
        <Path d="M263.596 147.253l-3.545-6.58c-11.431-21.215-37.133-31.733-62.382-25.528v0M285.609 133.587l-6.255-8.322c-18.876-25.12-50.945-38.39-84.374-34.916v0M313.148 117.125l-8.501-9.587c-24.842-28.015-62.191-43.616-101.94-42.58v0" />
      </G>
      <Rect
        x={1.35014}
        y={3.26646}
        width={163.233}
        height={317.21}
        rx={72.5}
        transform="rotate(22.526 -283.3 382.626) skewX(-.034)"
        fill="#F85858"
        stroke="#FE9696"
        strokeWidth={5}
      />
      <Path
        d="M54.961 287.283l12.433-1.901c60.528-9.255 120.859 17.969 154.022 69.502v0"
        stroke="#fff"
        strokeWidth={5}
      />
      <G filter="url(#filter1_d_111_1196)">
        <Path
          d="M123.919 221.278a13.413 13.413 0 0113.269-8.177l4.878.332 7.232.491c3.778.256 7.515.941 11.139 2.042l9.634 2.926 12.78 4.426 12.648 5.603 5.684 2.758 6.834 4.022.599.417a50.051 50.051 0 019.106 8.171l.345.396 1.559 2.377a14.042 14.042 0 011.49 12.414l-3.614 10.154c-1.411 3.965-6.278 5.397-9.612 2.828l-3.217-3.088a50.015 50.015 0 00-7.42-5.881l-6.222-4.036-6.859-4.023-12.618-6.054-12.679-5.152-7.007-2.269a50.02 50.02 0 00-14.151-2.414l-11.9-.295c-4.508-.306-7.376-4.962-5.621-9.127l3.723-8.841z"
          fill="#fff"
        />
        <Ellipse
          cx={155.146}
          cy={229.739}
          rx={5.90873}
          ry={5.91636}
          transform="rotate(3.885 155.146 229.739)"
          fill="#EF5050"
        />
        <Ellipse
          cx={155.146}
          cy={229.739}
          rx={5.90873}
          ry={5.91636}
          transform="rotate(3.885 155.146 229.739)"
          fill="#EF5050"
        />
        <Ellipse
          cx={192.074}
          cy={244.106}
          rx={5.90873}
          ry={5.91636}
          transform="rotate(3.885 192.074 244.106)"
          fill="#EF5050"
        />
        <Ellipse
          cx={192.074}
          cy={244.106}
          rx={5.90873}
          ry={5.91636}
          transform="rotate(3.885 192.074 244.106)"
          fill="#EF5050"
        />
      </G>
      <Rect
        width={12.5408}
        height={36.8992}
        rx={2}
        transform="matrix(.9026 .43047 -.42305 .9061 210.49 157.462)"
        fill="#F85858"
      />
      <Rect
        width={25.0129}
        height={24.2881}
        rx={2}
        transform="matrix(.8889 .4581 -.4508 .89263 214.183 137.185)"
        fill="#F85858"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default LogoSVG
