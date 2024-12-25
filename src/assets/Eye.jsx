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
      stroke="#1F1F1F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.988}
      d="m9.997 6.801-3.334 3.334a2.356 2.356 0 1 1 3.334-3.333Z"
    />
    <path
      stroke="#1F1F1F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.988}
      d="M12.164 4.363c-1.152-.87-2.47-1.343-3.834-1.343-2.325 0-4.493 1.37-6.002 3.742-.592.928-.592 2.49 0 3.419a9.44 9.44 0 0 0 1.786 2.088M5.972 13.43a6.071 6.071 0 0 0 2.358.487c2.326 0 4.493-1.37 6.002-3.742.593-.93.593-2.49 0-3.42a10.678 10.678 0 0 0-.699-.968"
    />
    <path
      stroke="#1F1F1F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.988}
      d="M10.643 8.93a2.349 2.349 0 0 1-1.857 1.857M6.664 10.135l-4.921 4.921M14.919 1.88 9.998 6.8"
    />
  </svg>
)
export default SvgComponent
