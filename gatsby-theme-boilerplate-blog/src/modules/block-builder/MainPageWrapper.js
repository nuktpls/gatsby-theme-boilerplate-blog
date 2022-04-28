import React from 'react'

import Layout from 'gatsby-layout-builder'
import SeoContainer from 'gatsby-layout-builder-seo'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import { useSiteMetadatas } from '../../tools/useSiteMetadatas'
import BoilerplateLogo from '@Images/boilerplate-blog-logo.svg'

import BodyBlock from '@BlockBuilder/BodyBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'

import NewFooterBlock from '@BlockBuilder/NewFooterBlock'

const MainPageWrapper = ({ children, title, seoSchema, classes }) => {
  const {
    githubImg,
    instaImg,
    twitterImg,
    whatsImg,
    bannerContent,
  } = useSiteMetadatas()
  return (
    <BodyBlock opt={{ classes: classes }}>
      <SeoContainer opt={seoSchema} />
      <HeaderBlock logotipoSvg={<BoilerplateLogo />} />
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
          {title}
        </HeadingBlock>
        <Layout
          type="ROW"
          opt={{
            isBoxed: true,
            classes: 'main-container-wrapper page-container',
          }}
        >
          {children}
        </Layout>
      </main>
      <NewFooterBlock
        githubImg={githubImg}
        instaImg={instaImg}
        twitterImg={twitterImg}
        whatsImg={whatsImg}
      />
    </BodyBlock>
  )
}

export default MainPageWrapper
