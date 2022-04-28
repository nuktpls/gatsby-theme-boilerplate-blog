import React from 'react'
import Layout from 'gatsby-layout-builder'
import HeadingBlock from '@BlockBuilder/HeadingBlock'
import BoilerplateLogo from '@Images/boilerplate-blog-logo.svg'
const NewFooterBlock = ({ githubImg, instaImg, twitterImg, whatsImg }) => (
  <>
    <HeadingBlock classes="m30auto hack" importance={9} width={400}>
      Social
    </HeadingBlock>
    <Layout type={'ROW'} opt={{ isBoxed: true }}>
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
              alt: 'title',
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
              alt: 'title',
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
              alt: 'title',
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
              alt: 'title',
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
  </>
)

export default NewFooterBlock
