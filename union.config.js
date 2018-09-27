module.exports = ({ target }) => ({
	workspaces: {
		widgetPattern: ['webexpo-widget'],
		appPattern: ['webexpo-app'],
	},
	devServer: {
		port: 3301,
	},
	...(target === 'wordpress'
		? {
				outputMapper: {
					js: 'js',
				},
				proxy: {
					port: 3300,
				},
				apps: [
					{
						name: 'webexpo-app-twentyfifteen',
						publicPath: '/webexpo-demo/wp-content/themes/twentyfifteen/webexpo-app-twentyfifteen/',
						proxy: {
							target: 'http://192.168.64.5',
							publicPath: '/webexpo-demo/wp-content/themes/twentyfifteen/webexpo-app-twentyfifteen/',
						},
					},
				],
		  }
		: {}),
});
