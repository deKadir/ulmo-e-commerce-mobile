import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCaps = (props) => (
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
      d="M11.293 3.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 19 12h-2v9a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-9H5a1 1 0 0 1-.707-1.707l7-7ZM7.414 10H8a1 1 0 0 1 1 1v9h6v-9a1 1 0 0 1 1-1h.586L12 5.414 7.414 10Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgCaps;
