import * as React from "react";

const SvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    viewBox="0 0 50 50"
  >
    <path
      stroke="#004BFE"
      strokeWidth="2"
      d="M49 25c0 13.255-10.745 24-24 24S1 38.255 1 25 11.745 1 25 1s24 10.745 24 24Z"
    ></path>
    <g
      stroke="#004BFE"
      strokeLinecap="round"
      strokeWidth="2"
      clipPath="url(#clip0_0_8375)"
    >
      <path d="M25 19.5v11M30.5 25h-11"></path>
    </g>
    <defs>
      <clipPath id="clip0_0_8375">
        <path fill="#fff" d="M19.5 19.5h11v11h-11z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;
