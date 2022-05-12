import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBell = (props) => (
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
      d="M5 9a7 7 0 0 1 14 0v1.312c0 .44.175.863.487 1.175l.756.756a2 2 0 0 1 .547 1.807l-.468 2.342A2 2 0 0 1 18.36 18H16a4 4 0 0 1-8 0H5.64a2 2 0 0 1-1.962-1.608L3.21 14.05a2 2 0 0 1 .547-1.807l.756-.756c.312-.312.487-.735.487-1.175V9Zm2 1.312V9a5 5 0 0 1 10 0v1.312c0 .97.386 1.902 1.073 2.59l.756.755L18.36 16H5.64l-.469-2.343.756-.756A3.662 3.662 0 0 0 7 10.311ZM10 18a2 2 0 1 0 4 0h-4Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgBell;
