import * as React from "react";

const SvgIcon = ({color="black",line="3"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="33"
    fill="none"
    viewBox="0 0 24 33"
  >
    <path fill="#fff" d="M0 0h24v24H0z" opacity="0.01"></path>
    <g clipPath="url(#clip0_2_5422)">
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip1_2_5422)"
      >
        <path d="M1.976 20.8V5.764L5.134 2H18.97l3.158 3.764V20.8c0 .56-.546 1.2-1.461 1.2H3.437c-.915 0-1.46-.64-1.46-1.2M2.571 5.4h19.066"></path>
        <path d="M16.366 9.8c0 2.43-1.931 4.4-4.314 4.4s-4.315-1.97-4.315-4.4"></path>
      </g>
    </g>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={line}
      d="M7.5 31h9"
    ></path>
    <defs>
      <clipPath id="clip0_2_5446">
        <path fill="#fff" d="M1.209 1.081h21.698v21.801H1.209z"></path>
      </clipPath>
      <clipPath id="clip1_2_5446">
        <path fill="#fff" d="M1.209 1.081h21.698v21.801H1.209z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;
