/* eslint-disable */
export default function excerpt(str, max, suffix) {
	if (!str) {
		return null
	}
	return str.length < max
		? str
		: `${str.substr(
				0,
				str.substr(0, max - suffix.length).lastIndexOf(' ')
		  )}${suffix}`
}
