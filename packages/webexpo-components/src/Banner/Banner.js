import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Banner as RebassBanner, Heading, Text } from 'rebass';
import bg from './bg.jpg';
import parrotBg from './parrot.gif';

class Banner extends Component {
	state = { hover: false };

	handleMouseEnter = () => {
		return this.props.parrot && this.setState({ hover: true });
	};

	handleMouseLeave = () => {
		return this.props.parrot && this.setState({ hover: false });
	};
	render() {
		const { title, children, parrot } = this.props;
		const { hover } = this.state;

		return (
			<RebassBanner
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				bg="gray8"
				color={parrot && hover ? 'red' : 'white'}
				backgroundSize={parrot && hover ? 'auto' : 'cover'}
				backgroundImage={parrot && hover ? parrotBg : bg}
			>
				<Heading>{title}</Heading>
				<Text textAlign="center" fontWeight="bold">
					{children}
				</Text>
			</RebassBanner>
		);
	}
}

Banner.propTypes = {
	/**
	 * Content to show in banner area
	 */
	children: PropTypes.node,
	/**
	 * Enables parrot mode
	 */
	parrot: PropTypes.bool,
	/**
	 * Banner title message
	 */
	title: PropTypes.node,
};

export default Banner;
