import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChevronLeft = (props) => (
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
      d="m9.414 12 6.793-6.793-1.414-1.414-7.5 7.5a1 1 0 0 0 0 1.414l7.5 7.5 1.414-1.414L9.414 12Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgChevronLeft;
