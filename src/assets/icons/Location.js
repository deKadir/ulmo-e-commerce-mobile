import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLocation = (props) => (
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
      d="M20.707 3.293a1 1 0 0 1 .227 1.064l-6.5 17a1 1 0 0 1-1.92-.193L11.13 12.87l-8.295-1.383a1 1 0 0 1-.193-1.92l17-6.5a1 1 0 0 1 1.064.227Zm-13.91 6.826 5.367.895a1 1 0 0 1 .822.822l.895 5.367 4.386-11.47-11.47 4.386Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgLocation;
