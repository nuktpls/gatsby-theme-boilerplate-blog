import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from 'gatsby-layout-builder'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'
import PostsBlock from '@BlockBuilder/PostsBlock'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'
import { defaultSchema } from '../configs/schemas'

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
        const { site } = useSiteMetadatas()
        const tagContext = props.pageContext.tag
        const tagListFiltered = tagList.filter(item => {
          return item.node.frontmatter.tags.includes(tagContext)
        })
        return (
          <MainTemplateWrapper classes="blog-list" seoSchema={defaultSchema}>
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
