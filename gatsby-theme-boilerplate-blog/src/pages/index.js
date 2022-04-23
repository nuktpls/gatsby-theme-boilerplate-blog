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
import NewFooterBlock from '@BlockBuilder/NewFooterBlock'
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
    bannerContent,
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

  return (
    <BodyBlock opt={{ classes: 'blog-list' }}>
      <SeoContainer
        opt={{
          schemaType: 'Blog',
          startedWebsiteDate: dateCreated,
          pageTitle: `Boileplate`,
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
      <Layout type="ROW" opt={{ classes: 'banner colorME', isBoxed: true }}>
        {/* bannerContent */}
        <Layout
          type="BLOCK_IMAGE"
          opt={{
            queryCard: bannerContent,
            hasLink: true,
            link: 'linkUrl',
            staticImage: true,
            publicImageUrl: bannerContent,
            alt: 'title',
            placeholder: 'NONE',
            classes: '',
          }}
        />
      </Layout>

      <main className="main-container" id="site-content" role="list">
        <HeadingBlock classes="m50auto hack" importance={9} width={400}>
          Featured Posts
        </HeadingBlock>
        <Layout
          type="ROW"
          opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
        >
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
        </Layout>
        <HeadingBlock classes="m50auto" importance={9} width={400}>
          Posts
        </HeadingBlock>
        <Layout
          type="ROW"
          opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
        >
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
        </Layout>
      </main>
      <NewFooterBlock
        githubImg={githubImg}
        instaImg={instaImg}
        twitterImg={twitterImg}
        whatsImg={whatsImg}
      />
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
