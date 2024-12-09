import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={19}
    height={18}
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_2003_871)">
      <Path
        d="M8.015 17.91C3.74 17.145 0.5 13.455 0.5 9C0.5 4.05 4.55 0 9.5 0C14.45 0 18.5 4.05 18.5 9C18.5 13.455 15.26 17.145 10.985 17.91L10.49 17.505H8.51L8.015 17.91Z"
        fill="url(#paint0_linear_2003_871)"
      />
      <Path
        d="M13.0101 11.52L13.4151 9.00001H11.0301V7.24501C11.0301 6.52501 11.3001 5.98501 12.3801 5.98501H13.5501V3.69001C12.9201 3.60001 12.2001 3.51001 11.5701 3.51001C9.50006 3.51001 8.06006 4.77001 8.06006 7.02001V9.00001H5.81006V11.52H8.06006V17.865C8.55506 17.955 9.05006 18 9.54506 18C10.0401 18 10.5351 17.955 11.0301 17.865V11.52H13.0101Z"
        fill="white"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_2003_871"
        x1={9.50045}
        y1={17.374}
        x2={9.50045}
        y2={-0.0033155}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0062E0" />
        <Stop offset={1} stopColor="#19AFFF" />
      </LinearGradient>
      <ClipPath id="clip0_2003_871">
        <Rect width={18} height={18} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
