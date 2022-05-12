import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPlus = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 11V3h2v8h8v2h-8v8h-2v-8H3v-2h8Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgPlus;
