import React from 'react'
import Layout from 'gatsby-layout-builder'

const MainWrapper = ({ children, title, opt }) => {
  return (
    <Layout
      type="ROW"
      opt={{
        isBoxed: opt.isBoxed,
        classes:
          opt && opt.classes
            ? opt.classes + ' main-wrapper container-transparency'
            : 'main-wrapper container-transparency',
        alignTo: 'left',
        title: title,
        bgColor: opt.bgColor,
      }}
    >
      {children}
    </Layout>
  )
}

export default MainWrapper
