import React from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

import SeoContainer from 'gatsby-layout-builder-seo'

import DescolaLogo from '@Images/boilerplate-blog-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'

import Layout from 'gatsby-layout-builder'
import BodyBlock from '@BlockBuilder/BodyBlock'
import AccessibilityBlock from '@BlockBuilder/AccessibilityBlock'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'

import SinglePostBlock from '@BlockBuilder/SinglePostBlock'
import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const SinglePost = ({ data, location }) => {
	const {
		footerThreeMarkdowRemark,
		imgHolder,
		site,
		cardImage,
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
		<BodyBlock opt={{ classes: 'single-post' }}>
			<SeoContainer
				opt={{
					// titleSeo:
					// authorSeo: ,
					// classes: 'single-post',
					// datePublished: ,
					schemaType: 'article',
					// featuredImage:

					// cardImage:
					//   post.frontmatter.featuredImage.childrenImageSharp[0].gatsbyImageData
					//     .images.fallback.src,
					// articleBody: ,
					// mainLogo: imgHolder,
					// description: ,
					// organization: {
					//   name: 'Organization',
					// },
					// serverUrl: location.origin || site.siteMetadata.siteUrl || '/',
					startedWebsiteDate: dateCreated,
					// modifiedWebsiteDate: modifiedWebsiteDate,
					createdPageDate: post.frontmatter.date,
					// modifiedPageDate: modifiedPageDate,
					pageTitle: `${post.frontmatter.title} - Descola`,
					pageDescription: post.excerpt,
					authorWebsiteData: organization.url,
					authorPostData: post.frontmatter.author,
					highlightImage:
						site.siteMetadata.siteUrl +
						post?.frontmatter?.featuredImage?.childrenImageSharp[0]
							.gatsbyImageData.images.fallback.src,
					// postsList: postsList,
					postBody: post.html,
					brandMainLogo:
						site.siteMetadata.siteUrl +
						getSrc(imgHolder?.childrenImageSharp[0]),
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
					// alternativeImage: alternativeImage,
					// websiteDescription: websiteDescription,
					// pageKeywords: pageKeywords,
					// postHeadline: postHeadline,
				}}
			/>
			<AccessibilityBlock />
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<main>
				{/* post?.frontmatter?.featuredImage?.childrenImageSharp[0] */}
				{/* .gatsbyImageData.images.fallback.src, */}
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
			<FooterBlock
				footerLogo={<DescolaLogoDark />}
				featurePosts={footerThreeMarkdowRemark.edges}
			/>
		</BodyBlock>
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
