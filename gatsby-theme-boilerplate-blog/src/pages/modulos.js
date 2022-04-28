import React from 'react'
import Layout from 'gatsby-layout-builder'
import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import { defaultSchema } from '../configs/schemas'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const Modulos = ({ location }) => {
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
          Módulos
        </HeadingBlock>
        <Layout
          type="ROW"
          opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
        >
          <h2>O que são módulos?</h2>
          <p>
            Teste aqui de tipografia aleatório contendo texto em língua nativa.
          </p>
        </Layout>
      </main>
    </MainTemplateWrapper>
  )
}

export default Modulos
