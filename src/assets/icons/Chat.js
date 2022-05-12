import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChat = (props) => (
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
      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10.316a3 3 0 0 1-3 3h-5.665l-3.288 2.482A1 1 0 0 1 7.444 21v-1.684H6a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v10.316a1 1 0 0 0 1 1h2.444a1 1 0 0 1 1 1v.676l1.954-1.474a1 1 0 0 1 .602-.202h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgChat;
