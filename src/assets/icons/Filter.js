import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilter = (props) => (
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
      d="M7 11a4.002 4.002 0 0 0 3.874-3H21V6H10.874A4.002 4.002 0 0 0 3 7a4 4 0 0 0 4 4Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM13.126 16A4.002 4.002 0 0 1 21 17a4 4 0 0 1-7.874 1H3v-2h10.126ZM19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgFilter;
