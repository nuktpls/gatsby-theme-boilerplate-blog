import React, { useState } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

import Footer from '../components/Footer'

const FooterContainer = ({ children, opt }) => {
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	return (
		<Footer
			refState={refState}
			handleRefState={handleRefState}
			children={children}
			opt={opt}
		/>
	)
}

export default FooterContainer
