import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import Layout from 'gatsby-layout-builder'
import SeoContainer from 'gatsby-layout-builder-seo'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'
import BoilerplateLogo from '@Images/boilerplate-blog-logo.svg'
import BoilerplateLogoDark from '@Images/boilerplate-squared.svg'
import BodyBlock from '@BlockBuilder/BodyBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import AccessibilityBlock from '@BlockBuilder/AccessibilityBlock'

import { FiInstagram, FiFacebook, FiTwitter, FiGithub } from 'react-icons/fi'

const IndexPage = props => {
  const [isFeatured, setIsFeatured] = useState(null)
  function setIsFeaturedState(isFeatured) {
    setIsFeatured(isFeatured)
  }
  const {
    cardImage,
    footerThreeMarkdowRemark,
    imgHolder,
    site,
    githubImg,
    instaImg,
    twitterImg,
    whatsImg,
  } = useSiteMetadatas()
  const { data } = props
  const posts = data.allMarkdownRemark.edges
  const {
    author,
    description,
    keywords,
    siteUrl,
    title,
    dateCreated,
    postsPerPage,
    organization,
    social,
    themeColor,
  } = site.siteMetadata
  const cardImg = cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null

  const findItem = postsList => {
    let x = []
    postsList.map(e => {
      // const yesSir = .find(isFeatured)
      e.node.frontmatter.featuredPost === true ? x.push(e) : null
      // console.log('x')
      // console.log(x)
    })
    return x
  }

  const featuredPosts = findItem(posts)
  // githubImg
  // instaImg,
  // twitterImg
  // whatsImg
  console.log(githubImg)
  return (
    <BodyBlock opt={{ classes: 'blog-list' }}>
      <SeoContainer
        opt={{
          // titleSeo: `Descola`,
          // classes: 'blog-list',
          // keywords: keywords,
          // social: {
          //   fbAppID: '0',
          // },
          // datePublished: dateCreated,
          // schemaType: 'Blog',
          // description: description,
          // authorSeo: author,
          // organization: {
          //   name: 'Organization',
          // },
          // brandPhone: organization.phone,
          // brandEmail: organization.email,
          // businessName: organization.name,
          // dateCreated: dateCreated,
          // themeColor: themeColor,
          // blogListing: posts.slice(0, 9),
          // mainLogo: imgHolder,
          // cardImage: cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null,
          // serverUrl: siteUrl,
          // sameAs: {
          //   instagram: 'https://www.instagram.com/descola_',
          //   facebook: 'https://www.facebook.com/descola_',
          //   linkedIn: 'https://www.linkedin.com/company/descola_',
          //   youtube: 'asd',
          // },
          schemaType: 'Blog',
          startedWebsiteDate: dateCreated,
          // modifiedWebsiteDate: modifiedWebsiteDate,
          // createdPageDate: createdPageDate,
          // modifiedPageDate: modifiedPageDate,
          pageTitle: `Descola`,
          pageDescription: description,
          authorWebsiteData: organization.url,
          authorPostData: organization.name,
          highlightImage: cardImg,
          // postsList: postsList,
          // postBody: postBody,
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
          // alternativeImage: alternativeImage,
          // websiteDescription: websiteDescription,
          // pageKeywords: pageKeywords,
          // postHeadline: postHeadline,
        }}
      />
      <AccessibilityBlock
      // opt={{
      //   accessibility: {
      //     to: '/accessibility',
      //     label: 'Acessibilidade Primeiro',
      //   },
      //   navigation: {
      //     to: '/#site-navigation',
      //     label: 'Ir para o menu de navegação',
      //   },
      //   content: {
      //     to: '/#site-content',
      //     label: 'Ir para o conteúdo',
      //   },
      // }}
      />

      <HeaderBlock logotipoSvg={<BoilerplateLogo />} />
      <Layout
        type="ROW"
        opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
      >
        <main className="main-container" id="site-content" role="list">
          <HeadingBlock importance={9} width={400}>
            Featured Posts
          </HeadingBlock>

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
          <HeadingBlock importance={9} width={400}>
            Posts
          </HeadingBlock>

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
        </main>
      </Layout>
      <Layout type={'ROW'} opt={{ isBoxed: true }}>
        <HeadingBlock importance={9} width={400}>
          Social
        </HeadingBlock>

        <Layout
          type={'ROW'}
          opt={{
            isBoxed: true,
            alignTo: 'center',
            classes: 'social-icons',
            numColumns: 4,
          }}
        >
          <div className="social-icon-wrapper">
            {/* <FiInstagram /> */}
            {/* githubImg */}
            <Layout
              type="BLOCK_IMAGE"
              opt={{
                queryCard: githubImg,
                hasLink: true,
                link: 'linkUrl',
                staticImage: true,
                publicImageUrl: githubImg,
                alt: title,
                placeholder: 'NONE',
                classes: 'colorME roundME bottom-social',
              }}
            />
          </div>
          <div className="social-icon-wrapper">
            {/* <FiFacebook /> */}
            <Layout
              type="BLOCK_IMAGE"
              opt={{
                queryCard: instaImg,
                hasLink: true,
                link: 'linkUrl',
                staticImage: true,
                publicImageUrl: instaImg,
                alt: title,
                placeholder: 'NONE',
                classes: 'colorME roundME bottom-social',
              }}
            />
          </div>
          <div className="social-icon-wrapper">
            {/* <FiTwitter /> */}
            <Layout
              type="BLOCK_IMAGE"
              opt={{
                queryCard: twitterImg,
                hasLink: true,
                link: 'linkUrl',
                staticImage: true,
                publicImageUrl: twitterImg,
                alt: title,
                placeholder: 'NONE',
                classes: 'colorME roundME bottom-social',
              }}
            />
          </div>
          <div className="social-icon-wrapper">
            {/* <FiGithub /> */}
            <Layout
              type="BLOCK_IMAGE"
              opt={{
                queryCard: whatsImg,
                hasLink: true,
                link: 'linkUrl',
                staticImage: true,
                publicImageUrl: whatsImg,
                alt: title,
                placeholder: 'NONE',
                classes: 'colorME roundME bottom-social',
              }}
            />
          </div>
        </Layout>
        <Layout
          type={'ROW'}
          opt={{ isBoxed: true, classes: 'logo-bottom-wrapper' }}
        >
          <BoilerplateLogo className="m0auto logo-bottom" />
          <p className="m0auto bottom-paragraph">
            © 2022 BOILERPLATE TIMES - TODOS OS DIREITOS RESERVADOS
          </p>
        </Layout>
        <hr />
      </Layout>
      {/* <FooterBlock
        footerLogo={<BoilerplateLogoDark />}
        featurePosts={footerThreeMarkdowRemark.edges}
      /> */}
    </BodyBlock>
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
            tags
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
