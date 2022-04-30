import React from 'react'
import InsertHTML from '../../../tools/InsertHTML'
const Row = ({ children, params, opt, bgOpt, bgImg, bugInfo }) => (
	<>
		<InsertHTML
			type="row"
			params={params}
			opt={opt}
			children={children}
			bgOpt={bgOpt}
			bgImg={bgImg}
		/>
	</>
)

export default Row
