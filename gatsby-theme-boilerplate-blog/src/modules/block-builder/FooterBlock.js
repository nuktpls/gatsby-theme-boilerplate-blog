import React from 'react'
import { Link } from 'gatsby'
import Layout from 'gatsby-layout-builder'

import excerpt from '../../tools/excerpt'

import { BsHeadset, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import layoutYAML from '@Content/main.yaml'
import footerMenuYAML from '@Content/footer-menu.yaml'
import footerTagsYAML from '@Content/footer-tags.yaml'
import footerSocialYAML from '@Content/social-media.yaml'

const FooterBlock = ({ footerLogo, featurePosts }) => {
  const { footer } = layoutYAML
  const { col1, col2, col3 } = footer
  const about_phone = col1.about_phone
  const about_phone_country_prefix = col1.about_phone_country_prefix
  const about_phone_state_prefix = col1.about_phone_state_prefix
  return (
    <footer id="site-footer">
      <Layout type="ROW" opt={{ bgColor: '#222', classes: 'footer' }}>
        <Layout
          type="ROW"
          opt={{ isBoxed: true, numColumns: 4, classes: 'footer-columns' }}
        >
          {col1?.about_widget ? (
            <div className="footer-infos">
              {col1.about_heading && col1.about_widget ? (
                <h3>{col1.about_heading}</h3>
              ) : null}
              {col1.about_p?.map((text, i) => (
                <p key={i}>{text.p}</p>
              ))}
              <p className="footer-headset">
                <BsHeadset />
                <a
                  href={`tel:${about_phone_country_prefix}${about_phone_state_prefix}${about_phone}`}
                >
                  {about_phone_country_prefix}
                  {` `}
                  {about_phone_state_prefix}
                  {` `}
                  {about_phone}
                </a>
              </p>
              {footerLogo ? <p className="footer-logo">{footerLogo}</p> : null}
            </div>
          ) : null}

          {col2.footer_tags_widget ? (
            <div className="tag-list-wrapper">
              {col2.footer_tags_heading && col2.footer_tags_widget ? (
                <h3>{col2.footer_tags_heading}</h3>
              ) : null}

              {footerTagsYAML?.tags
                ? footerTagsYAML.tags.map((elem, indx) => (
                    <a href={elem.tag.href} className="tag" key={indx}>
                      {elem.tag.label}
                    </a>
                  ))
                : null}

              {col2.social_media_widget ? (
                <div className="footer-social-icons">
                  {col2.social_media_heading && col2.social_media_widget ? (
                    <h3>{col2.social_media_heading}</h3>
                  ) : null}
                  {footerSocialYAML.social_media.map((elemn, indxs) => {
                    let icon = null
                    icon =
                      elemn?.item?.icon && elemn?.item?.icon === 'LinkedIn' ? (
                        <FaLinkedinIn />
                      ) : (
                        icon
                      )
                    icon =
                      elemn?.item?.icon && elemn?.item?.icon === 'Instagram' ? (
                        <BsInstagram />
                      ) : (
                        icon
                      )
                    icon =
                      elemn?.item?.icon && elemn?.item?.icon === 'Facebook' ? (
                        <FaFacebookF />
                      ) : (
                        icon
                      )
                    return (
                      <a
                        href={elemn.item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`${elemn?.item?.icon} perfil (abrir em nova página)`}
                        className="btn btn-primary btn-icon"
                        key={indxs}
                      >
                        {icon}
                      </a>
                    )
                  })}
                </div>
              ) : null}
            </div>
          ) : null}

          {featurePosts.length > 0 ? (
            <div className="footer-column-blog">
              {col3.featured_posts_heading && col3.featured_posts_widget ? (
                <h3>{col3.featured_posts_heading}</h3>
              ) : null}
              {featurePosts.slice(0, 3).map((eachPost, i) => {
                return (
                  <Link
                    to={`${eachPost.node.fields.slug}`}
                    className="footer__card"
                    key={i}
                  >
                    {eachPost.node.frontmatter.footerFeaturedImage ? (
                      <Layout
                        type="BLOCK_IMAGE"
                        opt={{
                          queryCard:
                            eachPost.node.frontmatter.footerFeaturedImage,
                          alt: eachPost.node.frontmatter.title,
                        }}
                      />
                    ) : null}
                    <div>
                      <h4>{eachPost.node.frontmatter.title}</h4>
                      <p>{excerpt(eachPost.node.excerpt, 50, '...')}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : null}

          <div className="footer-column-nav">
            <h3>Navegue</h3>
            <nav
              itemScope="itemScope"
              itemType="http://schema.org/SiteNavigationElement"
            >
              <ul className="footer-menu" role="menu">
                {footerMenuYAML?.footer_menu
                  ? footerMenuYAML?.footer_menu.map((el, ind) => (
                      <li key={ind}>
                        <a
                          href={el.item.href}
                          role="menuitem"
                          itemProp="url"
                          title="Cursos da Descola"
                          aria-label={`Acesso a página: ${el.item.label}, no websítio da Descola`}
                        >
                          {el.item.label}
                        </a>
                      </li>
                    ))
                  : null}
              </ul>
            </nav>
          </div>
        </Layout>
      </Layout>
    </footer>
  )
}

export default FooterBlock
