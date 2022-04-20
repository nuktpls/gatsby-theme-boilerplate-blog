import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadatas = () => {
  const site = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            keywords
            themeColor
            dateCreated
            postsPerPage
            searchBaseUrl
            author {
              name
            }
            organization {
              name
              url
              email
              logo
              cardImage
            }
            social {
              youtube
              instagram
              facebook
              linkedIn
            }
          }
        }
        footerThreeMarkdowRemark: allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
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
                footerFeaturedImage: featuredImage {
                  childrenImageSharp {
                    gatsbyImageData(
                      width: 152
                      height: 152
                      placeholder: DOMINANT_COLOR
                      quality: 80
                    )
                  }
                }
              }
              excerpt(pruneLength: 200)
            }
          }
        }
        imgHolder: file(relativePath: { eq: "descola-image.png" }) {
          childrenImageSharp {
            gatsbyImageData(
              width: 76
              height: 76
              placeholder: NONE
              quality: 100
            )
          }
        }
        cardImage: file(relativePath: { eq: "descola-banner.jpg" }) {
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
    `
  )
  return site
}
