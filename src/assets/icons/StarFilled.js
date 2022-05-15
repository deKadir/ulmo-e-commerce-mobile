import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgStarFilled = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.894 2.553a1 1 0 0 0-1.788 0L8.336 8.09l-5.988.922a1 1 0 0 0-.517 1.731l4.562 4.106-1.367 5.926a1 1 0 0 0 1.478 1.089L12 18.658l5.496 3.206a1 1 0 0 0 1.478-1.089l-1.367-5.926 4.562-4.106a1 1 0 0 0-.517-1.731l-5.989-.922-2.769-5.537Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgStarFilled;
