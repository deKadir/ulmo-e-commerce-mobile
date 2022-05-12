import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDirectionHorizontal = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m8.293 2.293-4 4a1 1 0 0 0 0 1.414l4 4 1.414-1.414L7.414 8H19V6H7.414l2.293-2.293-1.414-1.414ZM14.293 13.707 16.586 16H5v2h11.586l-2.293 2.293 1.414 1.414 4-4a1 1 0 0 0 0-1.414l-4-4-1.414 1.414Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgDirectionHorizontal;
