import { useEffect, useRef } from "react";

export function AnimatedPath({
  width = '100%',
  height = '100%',
  d,
  stroke = '#000',
  style,
  className
}: {
  d: string
  stroke?: string
  style?: React.CSSProperties
  className?: string
  width?: string | number
  height?: string | number
}) {
  const pathRef = useRef<any>(); useEffect(() => {
    const path = pathRef.current
    const plength = path.getTotalLength()
    path.style.strokeDasharray = plength
    path.style.strokeDashoffset = plength

    const addClass = setTimeout(() => {
      pathRef.current.classList.add('active')
    }, 600);

    return () => clearTimeout(addClass)

  }, []); return <svg width={width} height={height}
    xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path ref={pathRef} d={d} fill="none" id="svg_11" stroke={stroke} strokeWidth='3' />
  </svg>
}