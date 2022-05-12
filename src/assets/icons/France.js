import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const SvgFrance = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#france_svg__a)">
      <Path d="M9 21V3h6v18H9Z" fill="#F5F5F5" />
      <Path d="M3 21V3h6v18H3Z" fill="#3F51B5" />
      <Path d="M15 21V3h6v18h-6Z" fill="#F44336" />
    </G>
    <Defs>
      <ClipPath id="france_svg__a">
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

export default SvgFrance;
