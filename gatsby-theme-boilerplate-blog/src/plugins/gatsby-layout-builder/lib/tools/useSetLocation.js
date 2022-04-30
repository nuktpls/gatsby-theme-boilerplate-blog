import { useEffect } from 'react'

const useListenOutsideEvents = ({ setThemeLocation, themeLocation }) => {
	function handelSetLocation(func, location) {
		return func(location)
	}

	useEffect(() => {
		document.addEventListener(
			'onReady',
			handelSetLocation(setThemeLocation, themeLocation)
		)

		return () => {
			document.removeEventListener('onReady', handelSetLocation())
		}
	})
}

export default useListenOutsideEvents
