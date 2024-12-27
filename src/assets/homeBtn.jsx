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
    <g clipPath="url(#clip0_2_5446)">
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip1_2_5446)"
      >
        <path d="M2.209 20.702V9.231l9.85-6.927 9.848 6.927v11.471c0 .56-.534 1.18-1.41 1.18H3.62c-.876 0-1.411-.62-1.411-1.18"></path>
        <path d="M8.857 20.925V10.917h6.402v10.008"></path>
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
