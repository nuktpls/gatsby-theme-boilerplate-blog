import React from 'react'

import SeoContainer from 'gatsby-layout-builder-seo'
import { useSiteMetadatas } from '../../tools/useSiteMetadatas'
import BoilerplateLogo from '@Images/boilerplate-blog-logo.svg'

import BodyBlock from '@BlockBuilder/BodyBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'

import FooterBlock from '@BlockBuilder/FooterBlock'

const MainTemplateWrapper = ({ children, seoSchema, classes }) => {
  const { githubImg, instaImg, twitterImg, whatsImg } = useSiteMetadatas()
  return (
    <BodyBlock opt={{ classes: classes }}>
      <SeoContainer opt={seoSchema} />
      <HeaderBlock logotipoSvg={<BoilerplateLogo />} />
      {children}
      <FooterBlock
        githubImg={githubImg}
        instaImg={instaImg}
        twitterImg={twitterImg}
        whatsImg={whatsImg}
      />
    </BodyBlock>
  )
}

export default MainTemplateWrapper
