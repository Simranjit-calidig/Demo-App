import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={10}
    height={7}
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.29294 0.333252C9.71219 0.333252 9.94528 0.818218 9.68337 1.1456L5.39035 6.51188C5.19019 6.76208 4.80965 6.76208 4.60948 6.51188L0.316463 1.1456C0.0545568 0.818217 0.287644 0.333252 0.706898 0.333252L9.29294 0.333252Z"
      fill="#92929D"
    />
  </Svg>
);
export default SVGComponent;
