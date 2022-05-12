import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBurger = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M21 7H3V5h18v2ZM21 13H3v-2h18v2ZM3 19h18v-2H3v2Z" fill="#212121" />
  </Svg>
);

export default SvgBurger;
