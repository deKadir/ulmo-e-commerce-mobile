import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowRightDown = (props) => (
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
      d="M17.364 15.95V7.757h2v10.607a1 1 0 0 1-1 1H7.757v-2h8.193L4.222 5.636l1.414-1.414L17.364 15.95Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgArrowRightDown;
