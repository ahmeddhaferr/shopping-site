import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#004CFF"
      strokeWidth={2}
      d="M14.346 4.673a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0Z"
    />
    <g clipPath="url(#a)">
      <path
        stroke="#004CFF"
        strokeWidth={2}
        d="M20.921 23.064v-4.39A4.834 4.834 0 0 0 15.941 14H5.98A4.834 4.834 0 0 0 1 18.673v4.391"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 13h21.921v10.064H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
