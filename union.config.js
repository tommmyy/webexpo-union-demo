module.exports = ({ target }) => ({
	workspaces: {
		widgetPattern: ['webexpo-widget'],
		appPattern: ['webexpo-app'],
	},
	...(target === 'wordpress'
		? {
				outputMapper: {
					js: 'js',
				},
				apps: [
					{
						name: 'webexpo-app-theme',
						publicPath: '/webexpo-demo/wp-content/themes/twentyfifteen/webexpo-app-theme/',
						proxy: {
							target: 'http://192.168.64.5',
							publicPath: '/webexpo-demo/wp-content/themes/twentyfifteen/webexpo-app-theme/',
						},
					},
				],
		  }
		: {}),
});
