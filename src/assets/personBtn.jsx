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
      d="M14.346 4.673a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0Z"
    ></path>
    <g clipPath="url(#clip0_2_5449)">
      <path
        stroke={color}
        strokeWidth="2"
        d="M20.921 23.064v-4.39A4.834 4.834 0 0 0 15.941 14H5.98A4.834 4.834 0 0 0 1 18.673v4.391"
      ></path>
    </g>
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
