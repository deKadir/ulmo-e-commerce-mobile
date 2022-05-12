import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowUp = (props) => (
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
      d="m11 5.414-5.793 5.793-1.414-1.414 7.5-7.5a1 1 0 0 1 1.414 0l7.5 7.5-1.414 1.414L13 5.414V22h-2V5.414Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgArrowUp;
