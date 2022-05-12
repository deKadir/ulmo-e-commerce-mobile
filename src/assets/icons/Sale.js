import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSale = (props) => (
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
      d="M7 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#212121"
    />
    <Path
      d="m4.293 18.293 14-14 1.414 1.414-14 14-1.414-1.414Z"
      fill="#212121"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgSale;
