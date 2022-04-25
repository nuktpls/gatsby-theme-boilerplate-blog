const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)
const rootDir = path.join(__dirname, '../')

// Adding slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(1)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              title
              author
              featuredPost
              categories
              featuredImage {
                childrenImageSharp {
                  gatsbyImageData(
                    width: 350
                    height: 224
                    placeholder: NONE
                    quality: 100
                  )
                }
              }
            }
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 800) {
        group(field: frontmatter___categories) {
          fieldValue
          nodes {
            headings {
              value
            }
            fields {
              slug
            }
            frontmatter {
              featuredImage {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          rootDir,
          'gatsby-theme-boilerplate-blog/src/templates/single-post.js'
        ),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    const categories = result.data.categoriesGroup.group
    // Make category pages
    categories.forEach(category => {
      createPage({
        path: `/category/${_.kebabCase(category.fieldValue)}/`,
        component: path.resolve(
          rootDir,
          'gatsby-theme-boilerplate-blog/src/templates/category-list-page.js'
        ),
        context: {
          categories: category.fieldValue,
          siteMetadata: result.data.siteMetadata,
          footerThreeMarkdowRemark: result.data.footerThreeMarkdowRemark,
          postsPerPage: result.data.postsPerPage,
        },
      })
    })
  })
}
