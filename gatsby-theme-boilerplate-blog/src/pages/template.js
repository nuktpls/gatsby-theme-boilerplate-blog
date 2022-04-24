import React from 'react'
import { getSrc } from 'gatsby-plugin-image'
import Layout from 'gatsby-layout-builder'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'
import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'
import HeadingBlock from '@BlockBuilder/HeadingBlock'

const TemplatePage = () => {
  const { cardImage, imgHolder, site } = useSiteMetadatas()
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
    <MainTemplateWrapper
      seoSchema={{
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
    >
      <Layout
        type="ROW"
        opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
      >
        <main className="main-container" id="site-content" role="list">
          <HeadingBlock classes="m50auto" importance={9} width={400}>
            Posts
          </HeadingBlock>
        </main>
      </Layout>
    </MainTemplateWrapper>
  )
}

export default TemplatePage
