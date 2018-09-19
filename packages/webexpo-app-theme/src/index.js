import '@babel/polyfill';
import React from 'react';
import { justRender } from 'react-union';
import { AppContainer } from 'react-hot-loader';
import ready from 'document-ready';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

const render = Component =>
	justRender(
		<AppContainer errorReporter={__DEV__ ? require('redbox-react').default : null}>
			<Component store={store} />
		</AppContainer>
	);

ready(() => {
	render(Root);
});

const rerenderContainer = () => {
	const NextRoot = require('./containers/Root').default;
	render(NextRoot);
};

if (module.hot) {
	module.hot.accept(['./containers/Root'], rerenderContainer);
}
