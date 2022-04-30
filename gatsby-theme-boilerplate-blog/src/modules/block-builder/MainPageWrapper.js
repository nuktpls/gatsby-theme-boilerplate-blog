import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Row } from '../../components/InsertRow'

import SeoContainer from 'gatsby-layout-builder-seo'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import { useSiteMetadatas } from '../../tools/useSiteMetadatas'
import BoilerplateLogo from '@Images/boilerplate-blog-logo.svg'

import BodyBlock from '@BlockBuilder/BodyBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'

import FooterBlock from '@BlockBuilder/FooterBlock'

const MainPageWrapper = ({ children, title, seoSchema, classes }) => {
  const {
    githubImg,
    instaImg,
    twitterImg,
    whatsImg,
    bannerContent,
  } = useSiteMetadatas()
  const imageQuery = getImage(bannerContent.childrenImageSharp[0])

  return (
    <BodyBlock opt={{ classes: classes }}>
      <SeoContainer opt={seoSchema} />
      <HeaderBlock logotipoSvg={<BoilerplateLogo />} />
      <Row opt={{ classes: 'banner colorME', isBoxed: true }}>
        <GatsbyImage
          image={imageQuery}
          alt={'Imagem em Destaque'}
          placeholder={'NONE'}
          critical="true"
          className={'highlight-img'}
        />
      </Row>
      <main className="main-container" id="site-content" role="list">
        <HeadingBlock classes="m30auto" importance={9} width={400}>
          {title}
        </HeadingBlock>
        <Row
          opt={{
            isBoxed: true,
            classes: 'main-container-wrapper page-container',
          }}
        >
          {children}
        </Row>
      </main>
      <FooterBlock
        githubImg={githubImg}
        instaImg={instaImg}
        twitterImg={twitterImg}
        whatsImg={whatsImg}
      />
    </BodyBlock>
  )
}

export default MainPageWrapper
