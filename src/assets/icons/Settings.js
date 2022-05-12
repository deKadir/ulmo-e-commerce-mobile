import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSettings = (props) => (
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
      d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="#212121"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.985 3.156a2.758 2.758 0 0 1 4.03 0l.287.307c.543.581 1.312.9 2.107.873l.42-.015a2.758 2.758 0 0 1 2.85 2.85l-.015.42a2.757 2.757 0 0 0 .873 2.107l.307.287a2.757 2.757 0 0 1 0 4.03l-.307.287a2.757 2.757 0 0 0-.873 2.107l.014.42a2.757 2.757 0 0 1-2.849 2.85l-.42-.015a2.758 2.758 0 0 0-2.107.873l-.287.308a2.758 2.758 0 0 1-4.03 0l-.287-.308a2.758 2.758 0 0 0-2.107-.873l-.42.014a2.757 2.757 0 0 1-2.85-2.849l.015-.42a2.758 2.758 0 0 0-.873-2.107l-.307-.287a2.757 2.757 0 0 1 0-4.03l.307-.287c.581-.543.9-1.312.873-2.107l-.015-.42a2.758 2.758 0 0 1 2.85-2.85l.42.015a2.758 2.758 0 0 0 2.107-.873l.287-.307Zm2.568 1.365.287.307a4.758 4.758 0 0 0 3.637 1.507l.42-.015a.757.757 0 0 1 .783.783l-.015.42a4.758 4.758 0 0 0 1.507 3.637l.307.287c.32.299.32.807 0 1.106l-.307.287a4.758 4.758 0 0 0-1.507 3.637l.015.42a.757.757 0 0 1-.783.783l-.42-.014a4.758 4.758 0 0 0-3.637 1.506l-.287.307c-.299.32-.807.32-1.106 0l-.287-.307a4.758 4.758 0 0 0-3.637-1.506l-.42.014a.758.758 0 0 1-.783-.783l.015-.42a4.757 4.757 0 0 0-1.507-3.636l-.307-.288a.757.757 0 0 1 0-1.106l.307-.287a4.758 4.758 0 0 0 1.507-3.637l-.015-.42a.758.758 0 0 1 .783-.783l.42.015a4.757 4.757 0 0 0 3.636-1.507l.288-.307c.299-.32.807-.32 1.106 0Z"
      fill="#212121"
    />
  </Svg>
);

export default SvgSettings;
