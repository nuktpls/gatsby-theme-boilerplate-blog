import React from 'react'
// import slugify from '@tools/slugify'
const _ = require('lodash')
import Layout from 'gatsby-layout-builder'
import MainWrapper from './MainWrapper'
const PageHeader = ({ title, logotipoJogoMemoria, paragraph }) => {
  if (!title) {
    return null
  }
  const titleSlug = _.kebabCase(title)

  return (
    <MainWrapper title={titleSlug}>
      <div className="index-first-row">
        <Layout
          type="BLOCK_IMAGE"
          opt={{ queryCard: logotipoJogoMemoria, classes: 'header-logo' }}
        />
        <p className="index-paragraph">{paragraph}</p>
      </div>
    </MainWrapper>
  )
}

export default PageHeader
