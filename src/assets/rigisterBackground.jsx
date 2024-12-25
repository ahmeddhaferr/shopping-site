import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={375}
    height={308}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#F2F5FE"
        d="M149.237 157.191C116.216 286.524-45.905 161.1-68.005 64.977c-22.1-96.122 6.76-182.716 92.214-217.242 85.454-34.526 155.258 22.786 192.952 98.175 37.695 75.389-34.902 81.949-67.924 211.281Z"
      />
      <path
        fill="#004BFE"
        d="M405.963 64.974c57.517-78.235 121.398 54.352 121.398 121.398 0 67.047-54.352 121.399-121.398 121.399-67.047 0-130.247-51.047-121.399-121.399 8.849-70.352 63.882-43.163 121.399-121.398Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M-131.968-205.674h659.329V307.77h-659.329z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
