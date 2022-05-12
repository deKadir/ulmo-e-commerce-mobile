import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMinus = (props) => (
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
      d="M21 13H3v-2h18v2Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgMinus;
