import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

const SvgDenmark = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#denmark_svg__a)">
      <Rect
        x={3}
        y={21}
        width={18}
        height={18}
        rx={2}
        transform="rotate(-90 3 21)"
        fill="#F44336"
      />
      <Path d="M0 11v2h8v8h2v-8h11v-2H10V3H8v8H0Z" fill="#F5F5F5" />
    </G>
    <Defs>
      <ClipPath id="denmark_svg__a">
        <Rect
          x={3}
          y={21}
          width={18}
          height={18}
          rx={2}
          transform="rotate(-90 3 21)"
          fill="#fff"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgDenmark;
