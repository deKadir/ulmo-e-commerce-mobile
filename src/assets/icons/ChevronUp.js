import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChevronUp = (props) => (
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
      d="M12 7a1 1 0 0 1 .707.293l7.5 7.5-1.414 1.414L12 9.414l-6.793 6.793-1.414-1.414 7.5-7.5A1 1 0 0 1 12 7Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgChevronUp;
