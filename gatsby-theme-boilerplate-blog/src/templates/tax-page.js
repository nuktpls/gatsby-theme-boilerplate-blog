import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import Layout from 'gatsby-layout-builder'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'
import PostsBlock from '@BlockBuilder/PostsBlock'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const TagListPage = props => {
  return (
    <StaticQuery
      query={graphql`
        query TagsList {
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
      `}
      render={data => {
        const tagList = data.allMarkdownRemark.edges
        const { site, imgHolder, cardImage } = useSiteMetadatas()
        const cardImg = cardImage
          ? getSrc(cardImage.childrenImageSharp[0])
          : null

        const {
          description,
          keywords,
          siteUrl,
          dateCreated,
          organization,
          themeColor,
        } = site.siteMetadata
        const tagContext = props.pageContext.tag
        const tagListFiltered = tagList.filter(item => {
          return item.node.frontmatter.tags.includes(tagContext)
        })
        return (
          <MainTemplateWrapper
            classes="blog-list"
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
              <main className="main-container" role="list">
                <HeadingBlock importance={9} width={350}>
                  Posts da Tag: {props.pageContext.tag}
                </HeadingBlock>
                <PostsBlock
                  postList={tagListFiltered}
                  postsPerPage={site.siteMetadata.postsPerPage}
                  readMoreText="Ler Mais"
                  pagination={{
                    loadMoreBtn: true,
                    loadMore: 'Ler Mais',
                  }}
                />
              </main>
            </Layout>
          </MainTemplateWrapper>
        )
      }}
    />
  )
}
export default TagListPage
