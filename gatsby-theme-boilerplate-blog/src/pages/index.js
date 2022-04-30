import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Row } from '../components/InsertRow'

import { useSiteMetadatas } from '../tools/useSiteMetadatas'
import PostsBlock from '@BlockBuilder/PostsBlock'
import HeadingBlock from '@BlockBuilder/HeadingBlock'

import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'

import { defaultSchema } from '../configs/schemas'

const IndexPage = props => {
  const { site, bannerContent } = useSiteMetadatas()
  const { data } = props
  const posts = data.allMarkdownRemark.edges

  const findItem = postsList => {
    let x = []
    postsList.map(e => {
      if (e.node.frontmatter.featuredPost === true) {
        x.push(e)
      }
    })
    return x
  }
  const featuredPosts = findItem(posts)
  const imageQuery = getImage(bannerContent.childrenImageSharp[0])
  return (
    <MainTemplateWrapper seoSchema={defaultSchema(props.location)}>
      <Row
        opt={{ classes: 'banner colorME', isBoxed: true, role: 'something' }}
      >
        <GatsbyImage
          image={imageQuery}
          alt={'title'}
          placeholder={'NONE'}
          critical="true"
          className={''}
        />
      </Row>
      <main className="main-container" id="site-content" role="list">
        <HeadingBlock classes="m30auto hack" importance={9} width={400}>
          Featured Posts
        </HeadingBlock>
        <Row opt={{ isBoxed: true, classes: 'main-container-wrapper' }}>
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
        </Row>
        <HeadingBlock classes="m30auto" importance={9} width={400}>
          Posts
        </HeadingBlock>
        <Row opt={{ isBoxed: true, classes: 'main-container-wrapper' }}>
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
        </Row>
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
            categories
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
