import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadatas = () =>
  useStaticQuery(
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
                categories
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
        imgHolder: file(relativePath: { eq: "boilerplate-squared.png" }) {
          childrenImageSharp {
            gatsbyImageData(
              width: 76
              height: 76
              placeholder: NONE
              quality: 100
            )
          }
        }
        cardImage: file(relativePath: { eq: "boilerplate-banner.jpg" }) {
          childrenImageSharp {
            gatsbyImageData(
              width: 1200
              height: 627
              placeholder: NONE
              quality: 90
            )
          }
        }
        githubImg: file(relativePath: { eq: "github.png" }) {
          childrenImageSharp {
            gatsbyImageData(
              width: 120
              height: 120
              placeholder: NONE
              quality: 100
              backgroundColor: "transparent"
            )
          }
        }
        instaImg: file(relativePath: { eq: "insta.png" }) {
          childrenImageSharp {
            gatsbyImageData(
              width: 120
              height: 120
              placeholder: NONE
              quality: 100
              backgroundColor: "transparent"
            )
          }
        }
        twitterImg: file(relativePath: { eq: "twitter.png" }) {
          childrenImageSharp {
            gatsbyImageData(
              width: 120
              height: 120
              placeholder: NONE
              quality: 100
              backgroundColor: "transparent"
            )
          }
        }
        whatsImg: file(relativePath: { eq: "whats.png" }) {
          childrenImageSharp {
            gatsbyImageData(
              width: 120
              height: 120
              placeholder: NONE
              quality: 100
              backgroundColor: "transparent"
            )
          }
        }
        bannerContent: file(relativePath: { eq: "banner-content.png" }) {
          childrenImageSharp {
            gatsbyImageData(
              width: 950
              height: 59
              placeholder: NONE
              quality: 100
              backgroundColor: "transparent"
            )
          }
        }
      }
    `
  )
