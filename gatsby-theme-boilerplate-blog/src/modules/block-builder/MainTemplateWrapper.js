import React from 'react'
import { getSrc } from 'gatsby-plugin-image'

import SeoContainer from 'gatsby-layout-builder-seo'
import { useSiteMetadatas } from '../../tools/useSiteMetadatas'
import BoilerplateLogo from '@Images/boilerplate-blog-logo.svg'

import BodyBlock from '@BlockBuilder/BodyBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'

import NewFooterBlock from '@BlockBuilder/NewFooterBlock'

const MainTemplateWrapper = ({ children, seoSchema }) => {
  const {
    cardImage,
    imgHolder,
    site,
    githubImg,
    instaImg,
    twitterImg,
    whatsImg,
  } = useSiteMetadatas()
  const {
    description,
    keywords,
    siteUrl,
    dateCreated,
    organization,
    themeColor,
  } = site.siteMetadata
  const cardImg = cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null
  return (
    <BodyBlock opt={{ classes: 'blog-list' }}>
      <SeoContainer opt={seoSchema} />

      <HeaderBlock logotipoSvg={<BoilerplateLogo />} />
      {children}
      <NewFooterBlock
        githubImg={githubImg}
        instaImg={instaImg}
        twitterImg={twitterImg}
        whatsImg={whatsImg}
      />
    </BodyBlock>
  )
}

export default MainTemplateWrapper
