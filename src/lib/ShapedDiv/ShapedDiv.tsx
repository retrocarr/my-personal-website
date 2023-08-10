import { css } from "@emotion/css";
import React from "react";

// todo: update library when finished with it


export function ShapedDiv({
  children, bgShape, beforeShape, afterShape, bgColor,
  highlightOutsideShapes, width, height, shapeMargin,
  padding, style, className
}: {
  children: React.ReactNode
  bgShape: string
  bgColor?: string
  beforeShape?: string | false
  afterShape?: string | false
  highlightOutsideShapes?: boolean
  shapeMargin?: string
  width?: string
  height?: string
  padding?: string
  style?: React.CSSProperties
  className?: string
}) {

  const bShape = beforeShape || ''
  const aShape = afterShape || ''

  const containerStyle = css`
      // width: ${width};
      // height: ${height || '5em'};
      position: relative;
      `
  const bgStyle = css`
  inset: 0;
      position:absolute;
      z-index: -1;
      background: ${bgColor || '#0000ff90'};
      clip-path: ${bgShape};
  `

  const BandA = css`
    ${highlightOutsideShapes && 'background: #00ff0050;'}
     width:  50%;
     height: 100%;
     shape-margin: ${shapeMargin || 'none'};
  `

  const beforeStyle = css`
    ${BandA}
    float: left;
    clip-path:${bShape};
    shape-outside:${bShape};
  `

  const afterStyle = css`
    ${BandA}
    float: right;
    clip-path: ${aShape};
    shape-outside: ${aShape};
    width: ${beforeShape ? '50%' : '100%'};
  `

  return <>
    <div className={`${containerStyle} ${className}`} style={{ padding, ...style }}>
      <span className={bgStyle} />
      {beforeShape && <div className={`${beforeStyle} ${BandA}`} />}
      {afterShape && <div className={`${afterStyle} ${BandA}`} />}
      {children}
    </div>
  </>
}
