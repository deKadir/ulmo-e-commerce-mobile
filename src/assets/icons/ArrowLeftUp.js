import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowLeftUp = (props) => (
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
      d="M6.222 7.636v8.192h-2V5.222a1 1 0 0 1 1-1h10.606v2H7.636L19.364 17.95l-1.414 1.414L6.222 7.636Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgArrowLeftUp;
