import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLogotype = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 5v14.784h-2.595V17.6c-.494.755-1.188 1.349-2.081 1.78-.875.414-1.844.621-2.909.621-1.216 0-2.31-.234-3.279-.701a5.538 5.538 0 0 1-2.31-2.159C5.277 16.187 5 15.027 5 13.66V5h2.566v8.336c0 1.457.39 2.581 1.17 3.373.779.773 1.843 1.16 3.193 1.16 1.387 0 2.48-.405 3.279-1.214.798-.81 1.197-1.988 1.197-3.535V5H19Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgLogotype;
