import React, { useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import Layout from 'gatsby-layout-builder'
import SeoContainer from 'gatsby-layout-builder-seo'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'
import DescolaLogo from '@Images/boilerplate-blog-logo.svg'
import DescolaLogoDark from '@Images/boilerplate-squared.svg'
import BodyBlock from '@BlockBuilder/BodyBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import AccessibilityBlock from '@BlockBuilder/AccessibilityBlock'

const IndexPage = props => {
  const {
    cardImage,
    footerThreeMarkdowRemark,
    imgHolder,
    site,
  } = useSiteMetadatas()
  const { data } = props
  const posts = data.allMarkdownRemark.edges
  const {
    author,
    description,
    keywords,
    siteUrl,
    title,
    dateCreated,
    postsPerPage,
    organization,
    social,
    themeColor,
  } = site.siteMetadata
  const cardImg = cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null

  return (
    <BodyBlock opt={{ classes: 'blog-list' }}>
      <SeoContainer
        opt={{
          // titleSeo: `Descola`,
          // classes: 'blog-list',
          // keywords: keywords,
          // social: {
          //   fbAppID: '0',
          // },
          // datePublished: dateCreated,
          // schemaType: 'Blog',
          // description: description,
          // authorSeo: author,
          // organization: {
          //   name: 'Organization',
          // },
          // brandPhone: organization.phone,
          // brandEmail: organization.email,
          // businessName: organization.name,
          // dateCreated: dateCreated,
          // themeColor: themeColor,
          // blogListing: posts.slice(0, 9),
          // mainLogo: imgHolder,
          // cardImage: cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null,
          // serverUrl: siteUrl,
          // sameAs: {
          //   instagram: 'https://www.instagram.com/descola_',
          //   facebook: 'https://www.facebook.com/descola_',
          //   linkedIn: 'https://www.linkedin.com/company/descola_',
          //   youtube: 'asd',
          // },
          schemaType: 'Blog',
          startedWebsiteDate: dateCreated,
          // modifiedWebsiteDate: modifiedWebsiteDate,
          // createdPageDate: createdPageDate,
          // modifiedPageDate: modifiedPageDate,
          pageTitle: `Descola`,
          pageDescription: description,
          authorWebsiteData: organization.url,
          authorPostData: organization.name,
          highlightImage: cardImg,
          // postsList: postsList,
          // postBody: postBody,
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
          // alternativeImage: alternativeImage,
          // websiteDescription: websiteDescription,
          // pageKeywords: pageKeywords,
          // postHeadline: postHeadline,
        }}
      />
      <AccessibilityBlock
      // opt={{
      //   accessibility: {
      //     to: '/accessibility',
      //     label: 'Acessibilidade Primeiro',
      //   },
      //   navigation: {
      //     to: '/#site-navigation',
      //     label: 'Ir para o menu de navegação',
      //   },
      //   content: {
      //     to: '/#site-content',
      //     label: 'Ir para o conteúdo',
      //   },
      // }}
      />

      <HeaderBlock logotipoSvg={<DescolaLogo />} />
      <Layout
        type="ROW"
        opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
      >
        <main className="main-container" id="site-content" role="list">
          <HeadingBlock importance={10}>Posts</HeadingBlock>

          <PostsBlock
            postsPerPage={site.siteMetadata.postsPerPage}
            postList={posts}
            typeLoad={'push'} // or false
            // readMoreText="Ler Mais"
            pagination={{
              loadMoreBtn: true,
              loadMore: 'Ler Mais',
            }}
          />
        </main>
      </Layout>
      {/* <FooterBlock
        footerLogo={<DescolaLogoDark />}
        featurePosts={footerThreeMarkdowRemark.edges}
      /> */}
    </BodyBlock>
  )
}

export default IndexPage

export const queryAtividade = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 900
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            title
            tags
            featuredImage {
              childrenImageSharp {
                gatsbyImageData(
                  width: 400
                  height: 200
                  placeholder: DOMINANT_COLOR
                  quality: 100
                )
              }
            }
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
