import React from 'react';
import PropTypes from 'prop-types';
import { Banner as RebassBanner, Heading, Text } from 'rebass';
import bg from './bg.jpg';

const Banner = ({ title, children }) => (
	<RebassBanner
		color="white"
		bg="gray8"
		backgroundImage={bg}
	>
		<Heading>{title}</Heading>
		<Text
			textAlign="center"
			fontWeight="bold"
		>
			{children}
		</Text>
	</RebassBanner>
);


Banner.propTypes = {
	/**
	 * Content to show in banner area
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Banner title message
	 */
	title: PropTypes.node,

};

export default Banner;
