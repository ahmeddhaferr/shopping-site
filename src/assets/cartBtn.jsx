import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M0 0h24v24H0z" opacity={0.01} />
    <g clipPath="url(#a)">
      <g
        stroke="#004CFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#b)"
      >
        <path d="M1.976 20.8V5.764L5.134 2H18.97l3.158 3.764V20.8c0 .56-.546 1.2-1.461 1.2H3.437c-.915 0-1.46-.64-1.46-1.2ZM2.571 5.4h19.066" />
        <path d="M16.366 9.8c0 2.43-1.931 4.4-4.314 4.4s-4.315-1.97-4.315-4.4" />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.976 1h22.152v22H.976z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M.976 1h22.152v22H.976z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
