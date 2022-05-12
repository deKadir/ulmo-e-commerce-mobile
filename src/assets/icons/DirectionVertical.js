import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDirectionVertical = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m21.707 8.293-4-4a1 1 0 0 0-1.414 0l-4 4 1.414 1.414L16 7.414V19h2V7.414l2.293 2.293 1.414-1.414ZM10.293 14.293 8 16.586V5H6v11.586l-2.293-2.293-1.414 1.414 4 4a1 1 0 0 0 1.414 0l4-4-1.414-1.414Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgDirectionVertical;
