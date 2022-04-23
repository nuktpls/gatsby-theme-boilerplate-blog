import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import BoileplateLogo from '@Images/boilerplate-blog-logo.svg'
import BoileplateLogoDark from '@Images/boilerplate-squared.svg'

import Layout from 'gatsby-layout-builder'
import BodyBlock from '@BlockBuilder/BodyBlock'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import NewFooterBlock from '@BlockBuilder/NewFooterBlock'

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
        const {
          cardImage,
          footerThreeMarkdowRemark,
          site,
          githubImg,
          instaImg,
          twitterImg,
          whatsImg,
        } = useSiteMetadatas()

        const tagContext = props.pageContext.tag
        const tagListFiltered = tagList.filter(item => {
          return item.node.frontmatter.tags.includes(tagContext)
        })
        return (
          <BodyBlock opt={{ classes: 'blog-list' }}>
            <HeaderBlock logotipoSvg={<BoileplateLogo />} />
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
            {/* <FooterBlock
              footerLogo={<BoileplateLogoDark />}
              featurePosts={footerThreeMarkdowRemark.edges}
            /> */}
            <NewFooterBlock
              githubImg={githubImg}
              instaImg={instaImg}
              twitterImg={twitterImg}
              whatsImg={whatsImg}
            />
          </BodyBlock>
        )
      }}
    />
  )
}
export default TagListPage
