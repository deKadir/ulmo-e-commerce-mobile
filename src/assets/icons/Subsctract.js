import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSubsctract = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M7 13h10v-2H7v2Z" fill="#212121" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgSubsctract;
