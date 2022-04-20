import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

import Layout from 'gatsby-layout-builder'

const SinglePostBlock = ({
  highlightImage,
  authorImg,
  date,
  author,
  html,
  tags,
  title,
}) => {
  return (
    <article>
      <section>
        <Layout
          type="ROW"
          opt={{
            isBoxed: false,
            classes: 'post-header',
            bgColor: '#111e24',
          }}
        >
          <div className="header-post">
            <Layout type="ROW" opt={{ isBoxed: true, classes: 'post' }}>
              <div className="post-tags-wrapper">
                {tags.map((e, i) => {
                  return (
                    <Link
                      to={`/tags/${_.kebabCase(e)}/`}
                      className="post-tags"
                      key={i}
                    >
                      {e}
                    </Link>
                  )
                })}
              </div>
              <h1>{title}</h1>
            </Layout>
          </div>
        </Layout>
        <Layout type="ROW" opt={{ isBoxed: true, classes: 'main-post' }}>
          <div className="container">
            <div className="post-author">
              <Layout
                type="BLOCK_IMAGE"
                opt={{
                  queryCard: authorImg,
                  alt: 'Descola Holder',
                  classes: 'author-img',
                }}
              />
              <div className="post-author-infos">
                <time className="post-author-date" dateTime={date}>
                  {date}
                </time>
                <p className="post-author-name" rel="author">
                  {author}
                </p>
              </div>
            </div>
            <div>
              <Layout
                type="BLOCK_IMAGE"
                opt={{
                  queryCard: highlightImage,
                  alt: 'Imagem em Destaque',
                  classes: 'highlight-img',
                }}
              />
            </div>
            <div
              className="post-article-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </Layout>
      </section>
    </article>
  )
}

export default SinglePostBlock
