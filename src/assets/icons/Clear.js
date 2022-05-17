import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgClear = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.793 9.207 10.586 12l-2.793 2.793 1.414 1.414L12 13.414l2.793 2.793 1.414-1.414L13.414 12l2.793-2.793-1.414-1.414L12 10.586 9.207 7.793 7.793 9.207Z"
      fill="#212121"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      fill={props.fill || '#212121'}
    />
  </Svg>
);

export default SvgClear;
