// eslint-disable-next-line
import React from 'react'

const Body = ({ children, customClasses, bgImage }) => {
  return (
    <div
      className={`boilerplate ${customClasses}`}
      style={{ backgroundImage: bgImage }}
    >
      {children}
    </div>
  )
}
export default Body
