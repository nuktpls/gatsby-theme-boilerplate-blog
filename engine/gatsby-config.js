module.exports = {
	plugins: [
		{
			resolve: 'gatsby-theme-boilerplate-blog',
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
			options: {
				devMode: false,
			},
		},
	],
}
