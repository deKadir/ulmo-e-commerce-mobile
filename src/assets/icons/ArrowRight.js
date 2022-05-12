import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowRight = (props) => (
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
      d="m18.586 11-5.793-5.793 1.414-1.414 7.5 7.5a1 1 0 0 1 0 1.414l-7.5 7.5-1.414-1.414L18.586 13H2v-2h16.586Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgArrowRight;
