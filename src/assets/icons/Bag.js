import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBag = (props) => (
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
      d="M12 2a4 4 0 0 0-4 4v1H7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-1V6a4 4 0 0 0-4-4Zm2 7v2h2V9h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1v2h2V9h4Zm0-2V6a2 2 0 1 0-4 0v1h4Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgBag;
