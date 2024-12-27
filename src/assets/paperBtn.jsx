import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#004CFF"
      strokeWidth={2}
      d="M18 1H4a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3Z"
    />
    <path
      stroke="#004CFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.24 11h11.538M5.24 6.19h7.651M5.24 15.812h7.651"
    />
  </svg>
)
export default SvgComponent
