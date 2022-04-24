import React from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import SeoContainer from 'gatsby-layout-builder-seo'

import BoileplateLogo from '@Images/boilerplate-blog-logo.svg'
import BoileplateLogoDark from '@Images/boilerplate-squared.svg'

import Layout from 'gatsby-layout-builder'
import BodyBlock from '@BlockBuilder/BodyBlock'
import AccessibilityBlock from '@BlockBuilder/AccessibilityBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import NewFooterBlock from '@BlockBuilder/NewFooterBlock'
import MainTemplateWrapper from '@BlockBuilder/MainTemplateWrapper'

import SinglePostBlock from '@BlockBuilder/SinglePostBlock'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const SinglePost = ({ data, location }) => {
  const {
    footerThreeMarkdowRemark,
    imgHolder,
    site,
    cardImage,
    githubImg,
    instaImg,
    twitterImg,
    whatsImg,
  } = useSiteMetadatas()
  const {
    author,
    description,
    keywords,
    siteUrl,
    title,
    dateCreated,
    organization,
    social,
    themeColor,
  } = site.siteMetadata
  const post = data.markdownRemark
  return (
    <MainTemplateWrapper
      classes="single-post"
      seoSchema={{
        schemaType: 'article',
        startedWebsiteDate: dateCreated,
        createdPageDate: post.frontmatter.date,
        pageTitle: `${post.frontmatter.title} - Boileplate`,
        pageDescription: post.excerpt,
        authorWebsiteData: organization.url,
        authorPostData: post.frontmatter.author,
        highlightImage:
          site.siteMetadata.siteUrl +
          post?.frontmatter?.featuredImage?.childrenImageSharp[0]
            .gatsbyImageData.images.fallback.src,
        postBody: post.html,
        brandMainLogo:
          site.siteMetadata.siteUrl + getSrc(imgHolder?.childrenImageSharp[0]),
        brandCardLogo: cardImage,
        brandPhone: organization.phone,
        brandEmail: organization.email,
        brandName: organization.name,
        brandSocialArr: {
          instagram: 'https://www.instagram.com/descola_',
          facebook: 'https://www.facebook.com/descola_',
          linkedIn: 'https://www.linkedin.com/company/descola_',
          youtube: 'asd',
        },
        buildServerUrl: site.siteMetadata.siteUrl || '/',
        websiteLanguage: 'pt-BR',
        brandThemeColor: themeColor,
        brandKeywords: keywords,
        brandWebsiteUrl: site.siteMetadata.siteUrl,
        actualPage: site.siteMetadata.siteUrl + location.pathname || '/',
      }}
    >
      <main>
        <SinglePostBlock
          highlightImage={post?.frontmatter?.featuredImage}
          authorImg={imgHolder}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
          html={post.html}
          title={post.frontmatter.title}
          tags={post.frontmatter.tags}
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
        tags
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
    }
  }
`

export default SinglePost
