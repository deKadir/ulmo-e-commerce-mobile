import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHeart = (props) => (
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
      d="M3.912 4.42c2.349-2.042 5.958-1.862 8.078.414l.01.011.01-.01c2.12-2.277 5.73-2.457 8.078-.414 2.369 2.06 2.566 5.605.428 7.901l-7.784 8.36a1 1 0 0 1-1.464 0l-7.784-8.36c-2.138-2.296-1.94-5.84.428-7.901Zm6.614 1.777C9.146 4.715 6.765 4.59 5.224 5.93c-1.52 1.322-1.638 3.566-.276 5.03L12 18.532l7.052-7.574c1.362-1.463 1.244-3.707-.276-5.03-1.54-1.339-3.921-1.214-5.302.268l-.742.797a1 1 0 0 1-1.464 0l-.742-.797Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgHeart;
