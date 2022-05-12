import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLoader = (props) => (
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
      d="M12 4a8 8 0 1 0 8 8h2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.973 9.973 0 0 1 7.141 3l-1.428 1.4A7.973 7.973 0 0 0 12 4Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgLoader;
