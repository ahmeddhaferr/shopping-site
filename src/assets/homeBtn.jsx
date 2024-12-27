import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
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
      <path d="M1.209 19.702V8.231l9.85-6.927 9.848 6.927v11.471c0 .56-.534 1.18-1.41 1.18H2.62c-.876 0-1.411-.62-1.411-1.18Z" />
      <path d="M7.857 19.925V9.917h6.402v10.008" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.209.081h21.698v21.801H.209z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
