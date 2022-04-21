import React from 'react'
import { Link } from 'gatsby'

import Layout from 'gatsby-layout-builder'

const PostCard = ({
  postImage,
  linkUrl,
  title,
  excerpt,
  readMoreText,
  classes,
}) => {
  return (
    <div className="post-card" role="listitem" aria-label="Cartão de Postagem">
      <Layout
        type="BLOCK_IMAGE"
        opt={{
          queryCard: postImage,
          hasLink: true,
          link: linkUrl,
          staticImage: true,
          publicImageUrl: postImage,
          alt: title,
          placeholder: 'NONE',
          classes: classes,
        }}
      />
      <div className="post-card-content">
        <Link to={linkUrl}>
          <h2>{title}</h2>
        </Link>
        {excerpt === true ? (
          <Link to={linkUrl}>
            <p>{excerpt}</p>
          </Link>
        ) : null}
        {readMoreText === true ? (
          <Link to={linkUrl} className="card-posts-link">
            <p>{readMoreText}</p>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
export default PostCard
