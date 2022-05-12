import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgClose = (props) => (
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
      d="M10.586 12 3.293 4.707l1.414-1.414L12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgClose;
