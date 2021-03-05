import React from 'react'

export interface ISVGProps {
  size: number
  fill: string
}

const CheckCircle = (props: ISVGProps) => {
  return (
    <svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px'
      y='0px'
      width={`${props.size}rem`}
      height={`${props.size}rem`}
      fill={`${props.fill}`}
      viewBox='0 0 468.293 468.293' enableBackground='new 0 0 468.293 468.293' xmlSpace='preserve'>
      <circle fill='#219653' cx='234.146' cy='234.146' r='234.146' />
      <polygon fill='#EBF0F3' points='357.52,110.145 191.995,275.67 110.773,194.451 69.534,235.684 191.995,358.148
    398.759,151.378 ' />
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </svg>
  )
}

export default CheckCircle
