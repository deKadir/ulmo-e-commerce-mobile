import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowLeftDown = (props) => (
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
      d="M7.636 17.364h8.192v2H5.222a1 1 0 0 1-1-1V7.757h2v8.193L17.95 4.222l1.414 1.414L7.636 17.364Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgArrowLeftDown;
