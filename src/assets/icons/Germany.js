import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGermany = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="#212121" d="M3 3h18v6H3z" />
    <Path fill="#F44336" d="M3 9h18v6H3z" />
    <Path fill="#FFD60A" d="M3 15h18v6H3z" />
  </Svg>
);

export default SvgGermany;
