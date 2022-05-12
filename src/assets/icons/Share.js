import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgShare = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.707 3.293a1 1 0 0 0-1.414 0l-5 5 1.414 1.414L11 6.414V18h2V6.414l3.293 3.293 1.414-1.414-5-5Z"
      fill="#212121"
    />
    <Path
      d="M3 12v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9h-2v8H5v-8H3Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgShare;
