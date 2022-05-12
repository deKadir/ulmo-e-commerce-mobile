import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgReload = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 12.02a7 7 0 0 1 12.746-4H14v2h6a1 1 0 0 0 1-1v-6h-2v3.343a9 9 0 1 0 2 5.657h-2a7 7 0 1 1-14 0Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgReload;
