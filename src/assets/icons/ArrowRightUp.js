import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowRightUp = (props) => (
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
      d="M15.95 6.222H7.757v-2h10.607a1 1 0 0 1 1 1v10.606h-2V7.636L5.636 19.364 4.222 17.95 15.95 6.222Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgArrowRightUp;
