import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={38}
    height={38}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.1}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 37C28.9411 37 37 28.9411 37 19C37 9.05887 28.9411 1 19 1C9.05887 1 1 9.05887 1 19C1 28.9411 9.05887 37 19 37Z"
      stroke="#0062FF"
      strokeWidth={1.54286}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.1515 14.7684C25.0982 15.9195 25.6666 17.3935 25.6666 19.0002C25.6666 22.6821 22.6818 25.6669 18.9999 25.6669C15.318 25.6669 12.3333 22.6821 12.3333 19.0002C12.3333 15.3183 15.318 12.3336 18.9999 12.3336C20.5949 12.3336 22.059 12.8937 23.2063 13.8279L23.5736 13.4607L23.7481 12.5311C23.816 12.1692 24.1644 11.9309 24.5263 11.9989C24.8882 12.0668 25.1264 12.4152 25.0585 12.7771L25.0205 12.9797L25.2231 12.9417C25.585 12.8737 25.9334 13.112 26.0013 13.4739C26.0693 13.8358 25.831 14.1842 25.4691 14.2521L24.4825 14.4373L24.1515 14.7684ZM22.2573 14.7769C21.3563 14.081 20.2265 13.6669 18.9999 13.6669C16.0544 13.6669 13.6666 16.0547 13.6666 19.0002C13.6666 21.9458 16.0544 24.3336 18.9999 24.3336C21.9454 24.3336 24.3333 21.9458 24.3333 19.0002C24.3333 17.7618 23.9112 16.622 23.203 15.7168L22.2508 16.6691C22.7223 17.3254 22.9999 18.1304 22.9999 19.0002C22.9999 21.2094 21.2091 23.0002 18.9999 23.0002C16.7908 23.0002 14.9999 21.2094 14.9999 19.0002C14.9999 16.7911 16.7908 15.0002 18.9999 15.0002C19.8579 15.0002 20.6527 15.2703 21.3041 15.7301L22.2573 14.7769ZM20.34 16.6942C19.9462 16.4649 19.4884 16.3336 18.9999 16.3336C17.5272 16.3336 16.3333 17.5275 16.3333 19.0002C16.3333 20.473 17.5272 21.6669 18.9999 21.6669C20.4727 21.6669 21.6666 20.473 21.6666 19.0002C21.6666 18.4997 21.5287 18.0313 21.2887 17.6311L20.2831 18.6367C20.3158 18.7523 20.3333 18.8742 20.3333 19.0002C20.3333 19.7366 19.7363 20.3336 18.9999 20.3336C18.2635 20.3336 17.6666 19.7366 17.6666 19.0002C17.6666 18.2639 18.2635 17.6669 18.9999 17.6669C19.1127 17.6669 19.2223 17.6809 19.3269 17.7073L20.34 16.6942Z"
      fill="#0062FF"
    />
    <Path
      d="M1 19C1 28.9411 9.05887 37 19 37C28.9411 37 37 28.9411 37 19C37 9.05887 28.9411 1 19 1"
      stroke="#0062FF"
      strokeWidth={1.54286}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;