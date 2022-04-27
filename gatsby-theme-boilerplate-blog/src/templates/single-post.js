import React from 'react'
import { graphql } from 'gatsby'

import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'

import SinglePostBlock from '@BlockBuilder/SinglePostBlock'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'
import { articleSchema } from '../configs/schemas'

const SinglePost = ({ data, location }) => {
  const { imgHolder } = useSiteMetadatas()
  const post = data.markdownRemark
  return (
    <MainTemplateWrapper
      classes="single-post"
      seoSchema={articleSchema(data, location)}
    >
      <main>
        <SinglePostBlock
          highlightImage={post?.frontmatter?.featuredImage}
          authorImg={imgHolder}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
          html={post.html}
          title={post.frontmatter.title}
          categories={post.frontmatter.categories}
          timeToRead={post.timeToRead}
          wordCount={post.wordCount}
        />
      </main>
    </MainTemplateWrapper>
  )
}

export const query = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        author
        categories
        featuredPost
        featuredImage {
          childrenImageSharp {
            gatsbyImageData(
              width: 1200
              height: 627
              placeholder: NONE
              quality: 90
            )
          }
        }
      }
      excerpt(pruneLength: 200)
      html
      fields {
        slug
      }
      timeToRead
      wordCount {
        paragraphs
        sentences
        words
      }
    }
  }
`

export default SinglePost
