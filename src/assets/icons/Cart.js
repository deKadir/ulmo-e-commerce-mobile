import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCart = (props) => (
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
      d="M0 2h2.5a1 1 0 0 1 .8.4L4.5 4h15.06a3 3 0 0 1 2.942 3.588l-1.04 5.196A4 4 0 0 1 17.542 16H6a1 1 0 1 0 0 2h15v2h-2a2 2 0 1 1-4 0h-4a2 2 0 1 1-4 0H6a3 3 0 0 1-.338-5.981L3.093 5.458 2 4H0V2Zm5.344 4 2.4 8h9.797a2 2 0 0 0 1.96-1.608l1.04-5.196A1 1 0 0 0 19.561 6H5.343Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgCart;
