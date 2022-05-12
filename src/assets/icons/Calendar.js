import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCalendar = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M16 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#212121" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3h2v2h6V3h2v2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4V3Zm8 4v2h2V7a2 2 0 0 1 2 2v2H5V9a2 2 0 0 1 2-2v2h2V7h6ZM5 13h14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgCalendar;
