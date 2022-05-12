import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

const SvgUsa = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#usa_svg__a)">
      <Rect
        x={3}
        y={21}
        width={18}
        height={18}
        rx={2}
        transform="rotate(-90 3 21)"
        fill="#F5F5F5"
      />
      <Path
        d="M21 19H3v2h18v-2ZM3 15h18v2H3v-2ZM21 11h-8v2h8v-2ZM13 7h8v2h-8V7ZM13 3h8v2h-8V3Z"
        fill="#F44336"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 13V3H3v10h10ZM5.225 4.691 5 4l-.225.691H4.05l.588.427-.225.691L5 5.382l.588.427-.225-.691.588-.427h-.726ZM8 4l.225.691h.726l-.588.427.225.691L8 5.382l-.588.427.225-.691-.588-.427h.726L8 4Zm.225 3.691L8 7l-.225.691H7.05l.588.427-.225.691L8 8.382l.588.427-.225-.691.588-.427h-.726ZM11 7l.225.691h.726l-.588.427.225.691L11 8.382l-.588.427.225-.691-.588-.427h.726L11 7Zm.225 3.691L11 10l-.225.691h-.726l.588.427-.225.691.588-.427.588.427-.225-.691.588-.427h-.726ZM8 10l.225.691h.726l-.588.427.225.691L8 11.382l-.588.427.225-.691-.588-.427h.726L8 10Zm3.225-5.309L11 4l-.225.691h-.726l.588.427-.225.691.588-.427.588.427-.225-.691.588-.427h-.726ZM5 7l.225.691h.726l-.588.427.225.691L5 8.382l-.588.427.225-.691-.588-.427h.726L5 7Zm.225 3.691L5 10l-.225.691H4.05l.588.427-.225.691.588-.427.588.427-.225-.691.588-.427h-.726Z"
        fill="#3F51B5"
      />
    </G>
    <Defs>
      <ClipPath id="usa_svg__a">
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

export default SvgUsa;
