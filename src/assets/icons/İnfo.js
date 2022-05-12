import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svgİnfo = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M11 17v-6h2v6h-2ZM13 9V7h-2v2h2Z" fill="#212121" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      fill="#212121"
    />
  </Svg>
);

export default Svgİnfo;
