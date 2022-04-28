import React from 'react'
import Layout from 'gatsby-layout-builder'
import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import { defaultSchema } from '../configs/schemas'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const Contato = ({ location }) => {
  const { bannerContent } = useSiteMetadatas()
  return (
    <MainTemplateWrapper seoSchema={defaultSchema(location)}>
      <Layout type="ROW" opt={{ classes: 'banner colorME', isBoxed: true }}>
        <Layout
          type="BLOCK_IMAGE"
          opt={{
            queryCard: bannerContent,
            hasLink: true,
            link: 'linkUrl',
            staticImage: true,
            publicImageUrl: bannerContent,
            alt: 'title',
            placeholder: 'NONE',
            classes: '',
          }}
        />
      </Layout>
      <main className="main-container" id="site-content" role="list">
        <HeadingBlock classes="m30auto" importance={9} width={400}>
          Contato
        </HeadingBlock>
        <Layout
          type="ROW"
          opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
        >
          <h2>Fale Conosco</h2>
          <p>Sem falar.</p>
        </Layout>
      </main>
    </MainTemplateWrapper>
  )
}

export default Contato
