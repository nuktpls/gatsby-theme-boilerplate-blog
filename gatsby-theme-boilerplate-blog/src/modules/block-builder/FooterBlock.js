import React from 'react'
import { Row } from '../../components/InsertRow'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import HeadingBlock from '@BlockBuilder/HeadingBlock'
import BoilerplateLogo from '@Images/boilerplate-blog-logo.svg'
const FooterBlock = ({ githubImg, instaImg, twitterImg, whatsImg }) => {
  const githubGetImg = getImage(githubImg.childrenImageSharp[0])
  const instaGetImg = getImage(instaImg.childrenImageSharp[0])
  const twitterGetImg = getImage(twitterImg.childrenImageSharp[0])
  const whatsGetImg = getImage(whatsImg.childrenImageSharp[0])
  return (
    <>
      <HeadingBlock classes="m30auto hack" importance={9} width={400}>
        Social
      </HeadingBlock>
      <Row opt={{ isBoxed: true }}>
        <Row
          opt={{
            isBoxed: true,
            alignTo: 'center',
            classes: 'social-icons',
            numColumns: 4,
          }}
        >
          <div className="social-icon-wrapper">
            <GatsbyImage
              image={githubGetImg}
              alt={'title'}
              placeholder={'NONE'}
              critical="true"
              className={'colorME roundME bottom-social'}
            />
          </div>
          <div className="social-icon-wrapper">
            <GatsbyImage
              image={instaGetImg}
              alt={'title'}
              placeholder={'NONE'}
              critical="true"
              className={'colorME roundME bottom-social'}
            />
          </div>
          <div className="social-icon-wrapper">
            {/* <FiTwitter /> */}
            <GatsbyImage
              image={twitterGetImg}
              alt={'title'}
              placeholder={'NONE'}
              critical="true"
              className={'colorME roundME bottom-social'}
            />
          </div>
          <div className="social-icon-wrapper">
            <GatsbyImage
              image={whatsGetImg}
              alt={'title'}
              placeholder={'NONE'}
              critical="true"
              className={'colorME roundME bottom-social'}
            />
          </div>
        </Row>
        <Row opt={{ isBoxed: true, classes: 'logo-bottom-wrapper' }}>
          <BoilerplateLogo className="m0auto logo-bottom" />
          <p className="m0auto bottom-paragraph">
            © 2022 BOILERPLATE TIMES - TODOS OS DIREITOS RESERVADOS
          </p>
        </Row>
        <hr />
      </Row>
    </>
  )
}

export default FooterBlock
