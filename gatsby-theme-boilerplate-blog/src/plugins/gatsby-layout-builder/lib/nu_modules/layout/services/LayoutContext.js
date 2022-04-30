import React, { useState } from 'react'

const defaultState = {
	themeLocation: 'zumba',
	bgColor: '#fff',
	handleLocation: null,
}

const LayoutContext = React.createContext(defaultState)
const LayoutProvider = ({ children }) => {
	const [themeLocation, toggleLocation] = useState(null)
	const [bgColor, toggleBgColor] = useState(null)
	const [bugInfo, toggleDebugInfo] = useState(null)

	function handleLocation(newLocation) {
		toggleLocation(newLocation)
	}
	const handleBgColor = (newColor) => {
		toggleBgColor(newColor)
	}
	const handleDebugInfo = (newdebugInfo) => {
		toggleDebugInfo(newdebugInfo)
	}
	return (
		<LayoutContext.Provider
			value={{
				themeLocation,
				handleLocation: handleLocation,
				bgColor: bgColor,
				handleBgColor: handleBgColor,
				handleDebugInfo: handleDebugInfo,
				bugInfo: bugInfo,
			}}
		>
			{children}
		</LayoutContext.Provider>
	)
}

export default LayoutContext
export { LayoutProvider }
