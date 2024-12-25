import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#1F1F1F"
      d="M8.293 11.395c-.461 0-.923-.178-1.272-.527L2.726 6.571a.497.497 0 0 1 0-.698.497.497 0 0 1 .698 0l4.296 4.295a.811.811 0 0 0 1.146 0l4.295-4.295a.497.497 0 0 1 .699 0 .497.497 0 0 1 0 .698l-4.296 4.295c-.349.35-.81.527-1.271.527Z"
    />
  </svg>
)
export default SvgComponent