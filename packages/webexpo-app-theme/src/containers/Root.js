import React from 'react';
import PropTypes from 'prop-types';
import { Union } from 'react-union';
import { Provider } from 'react-redux';
import { Provider as Rebass } from 'rebass';
import { injectGlobal } from 'styled-components';

import routes from '../routes';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const Root = ({ store }) => (
	<Provider store={store}>
		<Rebass>
			<Union routes={routes} strictMode={false} />
		</Rebass>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object,
};

export default Root;
