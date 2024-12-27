import * as React from "react";

const SvgIcon = ({color="black",line="3"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="33"
    fill="none"
    viewBox="-2 0 24 33"
  >
    <path
        stroke={color}
        strokeWidth="2"
      d="M18 1H4a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3Z"
    ></path>
    <path
        stroke={color}
        strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.24 11h11.538M5.24 6.19h7.651M5.24 15.812h7.651"
    ></path>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={line}
      d="M6.5 31h9"
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
