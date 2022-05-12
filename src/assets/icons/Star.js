import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgStar = (props) => (
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
      d="M12 2a1 1 0 0 1 .894.553l2.77 5.537 5.988.922a1 1 0 0 1 .517 1.731l-4.562 4.106 1.367 5.926a1 1 0 0 1-1.478 1.089L12 18.658l-5.496 3.206a1 1 0 0 1-1.478-1.089l1.367-5.926-4.562-4.106a1 1 0 0 1 .517-1.731l5.989-.922 2.769-5.537A1 1 0 0 1 12 2Zm0 3.236L9.894 9.447a1 1 0 0 1-.742.541l-4.415.68 3.432 3.089a1 1 0 0 1 .305.968l-.98 4.245 4.002-2.334a1 1 0 0 1 1.008 0l4.001 2.334-.98-4.245a1 1 0 0 1 .306-.968l3.432-3.09-4.415-.679a1 1 0 0 1-.742-.54L12 5.235Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgStar;
