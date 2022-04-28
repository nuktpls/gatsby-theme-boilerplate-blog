import React from 'react'
import Layout from 'gatsby-layout-builder'
import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import { defaultSchema } from '../configs/schemas'

const Template = ({ location }) => {
  return (
    <MainTemplateWrapper seoSchema={defaultSchema(location)}>
      <main className="main-container" id="site-content" role="list">
        <HeadingBlock classes="m30auto" importance={9} width={400}>
          Template
        </HeadingBlock>
        <Layout
          type="ROW"
          opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
        ></Layout>
      </main>
    </MainTemplateWrapper>
  )
}

export default Template
