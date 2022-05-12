import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChevronDown = (props) => (
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
      d="M12 14.586 5.207 7.793 3.793 9.207l7.5 7.5a1 1 0 0 0 1.414 0l7.5-7.5-1.414-1.414L12 14.586Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgChevronDown;
