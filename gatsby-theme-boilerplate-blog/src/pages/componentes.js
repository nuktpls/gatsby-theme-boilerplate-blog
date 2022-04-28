import React from 'react'
import Layout from 'gatsby-layout-builder'
import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import { defaultSchema } from '../configs/schemas'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const Componentes = ({ location }) => {
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
          Componentes
        </HeadingBlock>
        <Layout
          type="ROW"
          opt={{
            isBoxed: true,
            classes: 'main-container-wrapper page-container',
          }}
        >
          <h2>Vamos falar sobre componentes?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            architecto earum laudantium sapiente? Voluptatibus consectetur sunt
            et? Blanditiis perspiciatis aspernatur minima, reprehenderit, iste
            quos fugiat veniam, deleniti et similique asperiores. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Modi architecto earum
            laudantium sapiente? Voluptatibus consectetur sunt et? Blanditiis
            perspiciatis aspernatur minima, reprehenderit, iste quos fugiat
            veniam, deleniti et similique asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            architecto earum laudantium sapiente? Voluptatibus consectetur sunt
            et? Blanditiis perspiciatis aspernatur minima, reprehenderit, iste
            quos fugiat veniam, deleniti et similique asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            architecto earum laudantium sapiente? Voluptatibus consectetur sunt
            et? Blanditiis perspiciatis aspernatur minima, reprehenderit, iste
            quos fugiat veniam, deleniti et similique asperiores.
          </p>
          <h2>Mais componentes?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            architecto earum laudantium sapiente? Voluptatibus consectetur sunt
            et? Blanditiis perspiciatis aspernatur minima, reprehenderit, iste
            quos fugiat veniam, deleniti et similique asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            architecto earum laudantium sapiente? Voluptatibus consectetur sunt
            et? Blanditiis perspiciatis aspernatur minima, reprehenderit, iste
            quos fugiat veniam, deleniti et similique asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            architecto earum laudantium sapiente? Voluptatibus consectetur sunt
            et? Blanditiis perspiciatis aspernatur minima, reprehenderit, iste
            quos fugiat veniam, deleniti et similique asperiores.
          </p>
        </Layout>
      </main>
    </MainTemplateWrapper>
  )
}

export default Componentes
