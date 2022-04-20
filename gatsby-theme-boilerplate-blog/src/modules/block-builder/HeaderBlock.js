import React from 'react'
import Layout from 'gatsby-layout-builder'

const HeaderBlock = ({ logotipoSvg }) => {
	return (
		<Layout
			type="HEADER"
			opt={{
				mainMenu: true,
				logoSvg: logotipoSvg,
				// logoUrl: 'https://descola.org/',
				bgOne: '#262A33',
				bgTwo: 'transparent',
			}}
		/>
	)
}

export default HeaderBlock
