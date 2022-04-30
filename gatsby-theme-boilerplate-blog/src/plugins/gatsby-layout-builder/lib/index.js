/*
  Export with named export to be able to pull in from library
*/

import React from 'react'
import LayoutResolver from './nu_modules/layout/containers'

const Layout = ({ type, opt, children, mainMenu }) => {
  return (
    <LayoutResolver
      type={type}
      opt={opt}
      subAgent={children}
      mainMenu={mainMenu}
    />
  )
}

export default Layout
