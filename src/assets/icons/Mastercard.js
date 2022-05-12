import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgMastercard = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={16} cy={12} r={6} fill="#FFCF53" />
    <Circle cx={8} cy={12} r={6} fill="#FF5959" />
    <Path
      d="M12 16.472A5.985 5.985 0 0 0 14 12a5.985 5.985 0 0 0-2-4.472A5.985 5.985 0 0 0 10 12c0 1.777.773 3.374 2 4.472Z"
      fill="#FF7E35"
    />
  </Svg>
);

export default SvgMastercard;
