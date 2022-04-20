import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import DescolaLogo from '@Images/boilerplate-blog-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'

import Layout from 'gatsby-layout-builder'
import BodyBlock from '@BlockBuilder/BodyBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'
import PostsBlock from '@BlockBuilder/PostsBlock'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const TagListPage = props => {
	return (
		<StaticQuery
			query={graphql`
				query TagsList {
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
									featuredImage {
										childrenImageSharp {
											gatsbyImageData(
												width: 350
												height: 224
												placeholder: DOMINANT_COLOR
												quality: 90
											)
										}
									}
								}
								excerpt(pruneLength: 200)
							}
						}
					}
				}
			`}
			render={data => {
				const tagList = data.allMarkdownRemark.edges
				const { cardImage, footerThreeMarkdowRemark, site } = useSiteMetadatas()

				const tagContext = props.pageContext.tag
				const tagListFiltered = tagList.filter(item => {
					return item.node.frontmatter.tags.includes(tagContext)
				})
				return (
					<BodyBlock opt={{ classes: 'blog-list' }}>
						<HeaderBlock logotipoSvg={<DescolaLogo />} />
						<Layout
							type="ROW"
							opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
						>
							<main className="main-container" role="list">
								<h1>Posts da Tag: {props.pageContext.tag}</h1>
								<PostsBlock
									postList={tagListFiltered}
									postsPerPage={site.siteMetadata.postsPerPage}
									readMoreText="Ler Mais"
									pagination={{
										loadMoreBtn: true,
										loadMore: 'Ler Mais',
									}}
								/>
							</main>
						</Layout>
						<FooterBlock
							footerLogo={<DescolaLogoDark />}
							featurePosts={footerThreeMarkdowRemark.edges}
						/>
					</BodyBlock>
				)
			}}
		/>
	)
}
export default TagListPage
