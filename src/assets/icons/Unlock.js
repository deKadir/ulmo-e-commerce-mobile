import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUnlock = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M13 18v-3h-2v3h2Z" fill="#212121" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 11V7a3 3 0 1 1 6 0h2A5 5 0 0 0 7 7v4H6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3H9Zm-3 2h12a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgUnlock;
