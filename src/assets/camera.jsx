import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={28}
    fill="none"
    {...props}
  >
    <g
      stroke="#004CFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M34 24.727a3.09 3.09 0 0 1-3.09 3.091H3.09A3.09 3.09 0 0 1 0 24.728v-17a3.09 3.09 0 0 1 3.09-3.092h6.183L12.363 0h9.273l3.091 4.636h6.182A3.09 3.09 0 0 1 34 7.727v17Z" />
      <path d="M24.022 15.287a7.022 7.022 0 1 1-14.044 0 7.022 7.022 0 0 1 14.044 0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h34v27.818H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
