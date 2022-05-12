import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

const SvgGreatbritain = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#great_britain_svg__a)">
      <Rect
        x={3}
        y={21}
        width={18}
        height={18}
        rx={2}
        transform="rotate(-90 3 21)"
        fill="#3F51B5"
      />
      <Path
        d="m20.132 22.253.353.354.354-.354 1.414-1.414.354-.354-.354-.353L14.121 12l8.132-8.132.354-.353-.354-.354-1.414-1.414-.354-.354-.353.354L12 9.879 3.868 1.747l-.353-.354-.354.354L1.747 3.16l-.354.354.354.353L9.879 12l-8.132 8.132-.354.353.354.354 1.414 1.414.354.354.353-.354L12 14.121l8.132 8.132Z"
        fill="#F44336"
        stroke="#fff"
      />
      <Path
        d="M21 13.5h.5v-3h-8v-8h-3v8h-8v3h8v8h3v-8H21Z"
        fill="#F44336"
        stroke="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="great_britain_svg__a">
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

export default SvgGreatbritain;
