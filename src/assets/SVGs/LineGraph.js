import * as React from 'react';
import Svg, {Path, G, Rect, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = props => (
  <Svg
    width={150}
    height={35}
    viewBox="0 0 101 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2 14.9742C2 14.9742 5.82366 14.1283 10.1709 16.1604C18.4392 20.0252 18.9109 12.9477 21.9768 9.53512C24.7819 6.41294 27.1049 8.3179 30.2281 12.1361C32.5316 14.9521 35.8886 19.6792 39.3652 18.9182C42.5431 18.2226 44.796 12.6784 49.201 11.2684C52.6922 10.1509 55.5294 13.221 59.5496 12.1361C65.0032 10.6643 65.8156 5.02671 69.7133 5.02671C74.524 5.02671 77.5369 15.0866 81.9133 15.0866C86.2638 15.0866 88.502 5.14174 93.261 8.16069C96.8992 10.4687 99 2 99 2"
      stroke="#0062FF"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G filter="url(#filter0_d_7_10891)">
      <Rect x={65} y={2} width={10} height={10} rx={5} fill="#0062FF" />
      <Rect
        x={65.75}
        y={2.75}
        width={8.5}
        height={8.5}
        rx={4.25}
        stroke="white"
        strokeWidth={1.5}
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SVGComponent;
