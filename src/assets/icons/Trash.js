import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTrash = (props) => (
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
      d="M8.051 2.684A1 1 0 0 1 9 2h6a1 1 0 0 1 .949.684L16.72 5H20v2H4V5h3.28l.771-2.316ZM14.28 4l.334 1H9.387l.334-1h4.558Z"
      fill="#212121"
    />
    <Path
      d="M5 9v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-2v11H7V9H5Z"
      fill="#212121"
    />
    <Path d="M9 18V9h2v9H9ZM13 9v9h2V9h-2Z" fill="#212121" />
  </Svg>
);

export default SvgTrash;
