import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCheckmark = (props) => (
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
      d="m20.207 7.207-10.5 10.5a1 1 0 0 1-1.414 0l-4.5-4.5 1.414-1.414L9 15.586l9.793-9.793 1.414 1.414Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgCheckmark;
