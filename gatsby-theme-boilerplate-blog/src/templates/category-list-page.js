import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from 'gatsby-layout-builder'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'
import PostsBlock from '@BlockBuilder/PostsBlock'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'
import { defaultSchema } from '../configs/schemas'

const CategoryListPage = props => {
  return (
    <StaticQuery
      query={graphql`
        query CategoriesList {
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
                  categories
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
        const categoriesList = data.allMarkdownRemark.edges
        const { site } = useSiteMetadatas()
        const categoriesContext = props.pageContext.categories
        const categoriesListFiltered = categoriesList.filter(item => {
          return item.node.frontmatter.categories.includes(categoriesContext)
        })
        return (
          <MainTemplateWrapper
            classes="blog-list"
            seoSchema={defaultSchema(props.location)}
          >
            <main className="main-container" role="list">
              <HeadingBlock classes="m30auto" importance={9} width={400}>
                Posts da Categoria: {props.pageContext.categories}
              </HeadingBlock>
              <Layout
                type="ROW"
                opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
              >
                <PostsBlock
                  postList={categoriesListFiltered}
                  postsPerPage={site.siteMetadata.postsPerPage}
                  readMoreText="Ler Mais"
                  pagination={{
                    loadMoreBtn: true,
                    loadMore: 'Ler Mais',
                  }}
                />
              </Layout>
            </main>
          </MainTemplateWrapper>
        )
      }}
    />
  )
}
export default CategoryListPage
