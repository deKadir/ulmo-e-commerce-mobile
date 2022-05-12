import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMicro = (props) => (
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
      d="M9 5a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0V5Zm4 0v6a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0Z"
      fill="#212121"
    />
    <Path
      d="M6 9v4.5a4 4 0 0 0 4 4h1V22h2v-4.5h1a4 4 0 0 0 4-4V9h-2v4.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9H6Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgMicro;
