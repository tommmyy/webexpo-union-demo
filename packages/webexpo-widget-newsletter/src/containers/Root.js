import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectReducers } from 'redux-extensible-store';

import reducers from '../reducers';
import Newsletter from './Newsletter';

class Root extends Component {
	static propTypes = {
		injectReducers: PropTypes.func,
		namespace: PropTypes.string,
	};

	componentDidMount() {
		this.props.injectReducers(reducers);
	}

	handleSubmit = (data) => {
		console.log(data);
	};

	render() {
		return <Newsletter form="registration" onSubmit={this.handleSubmit} />;
		// return <Newsletter form={`registration-${sthis.props.namespace}`} onSubmit={this.handleSubmit} />;
	}
}

export default connect(undefined, {
	injectReducers,
})(Root);
