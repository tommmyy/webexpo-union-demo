module.exports = {
	root: true,
	extends: ['react-union'],
	globals: {
		__DEV__: true,
	},
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'packages/**/*.test.js',
					'packages/**/*.stories.js',
					'testsSetup.js',
					'api/**/*',
				],
			},
		],
		// conflicts with prettier
		'react/jsx-max-props-per-line': 0,
		'max-len': 0,
	},
};
