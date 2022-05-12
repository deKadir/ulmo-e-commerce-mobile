import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPoland = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="#F5F5F5" d="M3 3h18v9H3z" />
    <Path fill="#F44336" d="M3 12h18v9H3z" />
  </Svg>
);

export default SvgPoland;
