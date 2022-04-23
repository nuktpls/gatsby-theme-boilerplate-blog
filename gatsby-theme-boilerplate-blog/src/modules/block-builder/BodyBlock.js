import React from 'react'
import Layout from 'gatsby-layout-builder'
import CursorResolver from 'gatsby-layout-builder-cursor'

const BodyBlock = ({ children, opt }) => {
  return (
    <Layout type="BODY" opt={{ classes: opt.classes }}>
      <CursorResolver />
      {children}
    </Layout>
  )
}

export default BodyBlock
