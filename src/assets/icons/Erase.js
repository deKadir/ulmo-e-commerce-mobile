import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgErase = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.793 9.207 12.586 12l-2.793 2.793 1.414 1.414L14 13.414l2.793 2.793 1.414-1.414L15.414 12l2.793-2.793-1.414-1.414L14 10.586l-2.793-2.793-1.414 1.414Z"
      fill="#212121"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3a1 1 0 0 0-.707.293l-8 8a1 1 0 0 0 0 1.414l8 8A1 1 0 0 0 9 21h9a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H9Zm-6.586 9 7-7H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9.414l-7-7Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgErase;
