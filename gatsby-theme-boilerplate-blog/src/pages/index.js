import React from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import Layout from 'gatsby-layout-builder'

import { useSiteMetadatas } from '../tools/useSiteMetadatas'
import PostsBlock from '@BlockBuilder/PostsBlock'
import HeadingBlock from '@BlockBuilder/HeadingBlock'

import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'

const IndexPage = props => {
  const { cardImage, imgHolder, site, bannerContent } = useSiteMetadatas()
  const { data } = props
  const posts = data.allMarkdownRemark.edges

  const {
    description,
    keywords,
    siteUrl,
    dateCreated,
    organization,
    themeColor,
  } = site.siteMetadata
  const cardImg = cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null

  const findItem = postsList => {
    let x = []
    postsList.map(e => {
      e.node.frontmatter.featuredPost === true ? x.push(e) : null
    })
    return x
  }
  const featuredPosts = findItem(posts)
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
        <HeadingBlock classes="m50auto hack" importance={9} width={400}>
          Featured Posts
        </HeadingBlock>
        <Layout
          type="ROW"
          opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
        >
          <PostsBlock
            postsPerPage={site.siteMetadata.postsPerPage}
            postList={featuredPosts}
            typeLoad={'push'} // or false
            // readMoreText="Ler Mais"
            pagination={{
              loadMoreBtn: true,
              loadMore: 'Ler Mais',
            }}
            classes="colorME"
          />
        </Layout>
        <HeadingBlock classes="m50auto" importance={9} width={400}>
          Posts
        </HeadingBlock>
        <Layout
          type="ROW"
          opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
        >
          <PostsBlock
            postsPerPage={site.siteMetadata.postsPerPage}
            postList={posts}
            typeLoad={'push'} // or false
            // readMoreText="Ler Mais"
            pagination={{
              loadMoreBtn: true,
              loadMore: 'Ler Mais',
            }}
            classes="colorME"
          />
        </Layout>
      </main>
    </MainTemplateWrapper>
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
            featuredPost
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
