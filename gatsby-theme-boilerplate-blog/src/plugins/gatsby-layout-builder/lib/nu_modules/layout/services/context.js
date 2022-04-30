import React, { useState } from 'react'

const defaultState = {
	pageNameState: 'Home',
	handlePageName: null,
}
const GlobalContext = React.createContext(defaultState)
const GlobalProvider = ({ children, pageName }) => {
	const [pageNameState, togglePageName] = useState('Home')
	function handlePageName(xxx) {
		togglePageName(xxx)
	}
	return (
		<GlobalContext.Provider
			value={{
				pageNameState,
				handlePageName: handlePageName,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalContext
export { GlobalProvider }
