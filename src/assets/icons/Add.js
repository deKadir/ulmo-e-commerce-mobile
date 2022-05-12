import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAdd = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M11 7v4H7v2h4v4h2v-4h4v-2h-4V7h-2Z" fill="#212121" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgAdd;
