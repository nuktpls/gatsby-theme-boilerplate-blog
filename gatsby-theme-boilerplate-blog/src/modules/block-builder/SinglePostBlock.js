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
  categories,
  title,
  timeToRead,
  wordCount,
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
            <Layout
              type="ROW"
              opt={{ isBoxed: true, classes: 'post', alignTo: 'center' }}
            >
              <h1>{title}</h1>
            </Layout>
          </div>
        </Layout>
        <Layout type="ROW" opt={{ isBoxed: true, classes: 'main-post' }}>
          <div className="container">
            <div className="post-author">
              <Layout
                type="ROW"
                opt={{ numColumns: 2, classes: 'post-author-infos' }}
              >
                <div className="inner-post-author-infos">
                  <Layout
                    type="BLOCK_IMAGE"
                    opt={{
                      queryCard: authorImg,
                      alt: 'Boileplate Holder',
                      classes: 'author-img',
                    }}
                  />
                  <div className="innerauthor-infos">
                    <p className="post-author-name" rel="author">
                      {author}
                    </p>
                    <time className="post-author-date" dateTime={date}>
                      {date}
                    </time>
                  </div>
                </div>
                <Layout
                  type="ROW"
                  opt={{ classes: 'editorial-infos', numColumns: 2 }}
                >
                  <p className="timeToread">{timeToRead} min. to read</p>
                  <p className="wordCount">{wordCount.paragraphs} paragraphs</p>
                  <p className="wordCount">{wordCount.sentences} sentences</p>
                  <p className="wordCount">{wordCount.words} words</p>
                </Layout>
              </Layout>
            </div>
            <div className="post-categories-wrapper">
              <p>Trends</p>
              {categories.map((e, i) => {
                return (
                  <Link
                    to={`/category/${_.kebabCase(e)}/`}
                    className="post-categories"
                    key={i}
                  >
                    #{e}
                  </Link>
                )
              })}
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
