import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLogout = (props) => (
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
      d="m17.707 7.293 4 4a1 1 0 0 1 0 1.414l-4 4-1.414-1.414L18.586 13H7v-2h11.586l-2.293-2.293 1.414-1.414Z"
      fill="#212121"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a8 8 0 1 0 3.555 15.169l.89 1.791A9.963 9.963 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c1.595 0 3.105.374 4.445 1.04l-.89 1.791A7.963 7.963 0 0 0 12 4Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgLogout;
