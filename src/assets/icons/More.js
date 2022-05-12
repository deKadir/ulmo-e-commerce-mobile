import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMore = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgMore;
