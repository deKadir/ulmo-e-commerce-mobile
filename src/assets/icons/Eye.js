import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEye = (props) => (
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
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="#212121"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0 1.314-4.686 7-10 7S2 13.314 2 12s4.686-7 10-7 10 5.686 10 7Zm-1.957-.32s-.001.007-.006.02l.006-.02Zm-.475-.151c.133.183.236.341.313.471-.077.13-.18.288-.313.471a12.424 12.424 0 0 1-1.883 2.008C16.021 15.916 13.973 17 12 17c-1.973 0-4.021-1.084-5.685-2.52a12.424 12.424 0 0 1-1.883-2.009A6.153 6.153 0 0 1 4.12 12c.077-.13.18-.288.313-.471A12.425 12.425 0 0 1 6.315 9.52C7.979 8.084 10.027 7 12 7c1.973 0 4.021 1.084 5.685 2.52.81.7 1.456 1.422 1.883 2.009Zm-15.611.152s.003.006.006.019c-.005-.013-.006-.02-.006-.02Zm0 .639s.001-.007.006-.02l-.006.02Zm16.08-.02c.005.013.006.02.006.02l-.006-.02Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgEye;
