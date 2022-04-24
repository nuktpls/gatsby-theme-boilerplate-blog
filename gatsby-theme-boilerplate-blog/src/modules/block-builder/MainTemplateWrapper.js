import React from 'react'
import { getSrc } from 'gatsby-plugin-image'

import SeoContainer from 'gatsby-layout-builder-seo'
import { useSiteMetadatas } from '../../tools/useSiteMetadatas'
import BoilerplateLogo from '@Images/boilerplate-blog-logo.svg'

import BodyBlock from '@BlockBuilder/BodyBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'

import NewFooterBlock from '@BlockBuilder/NewFooterBlock'

const MainTemplateWrapper = ({ children }) => {
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
      <SeoContainer
        opt={{
          schemaType: 'Blog',
          startedWebsiteDate: dateCreated,
          pageTitle: `Boileplate`,
          pageDescription: description,
          authorWebsiteData: organization.url,
          authorPostData: organization.name,
          highlightImage: cardImg,
          brandMainLogo: imgHolder,
          brandCardLogo: imgHolder,
          brandPhone: organization.phone,
          brandEmail: organization.email,
          brandName: organization.name,
          brandSocialArr: {
            instagram: 'https://www.instagram.com/descola_',
            facebook: 'https://www.facebook.com/descola_',
            linkedIn: 'https://www.linkedin.com/company/descola_',
            youtube: 'asd',
          },
          buildServerUrl: siteUrl,
          websiteLanguage: 'pt-BR',
          brandThemeColor: themeColor,
          brandKeywords: keywords,
          brandWebsiteUrl: siteUrl,
        }}
      />

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
