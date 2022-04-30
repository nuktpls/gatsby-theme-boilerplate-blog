import React from 'react'
import CursorResolver from 'gatsby-layout-builder-cursor'

const BodyBlock = ({ children, opt }) => {
  return (
    <div className={opt.classes}>
      <CursorResolver />
      {children}
    </div>
  )
}

export default BodyBlock
