import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Heading, Card, Button, ButtonOutline, Label, Input, Box, Small } from 'rebass';
import { warn, validate } from './validations';

/* eslint-disable react/prop-types */
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<Box mb={20}>
		<Label>{label}</Label>
		<Input {...input} placeholder={label} type={type} />
		{touched &&
			((error && <Small fontWeight="bold">{error}</Small>) ||
				(warning && <Small fontWeight="bold">{warning}</Small>))}

	</Box>
);
/* eslint-enable react/prop-types */

const NewsletterForm = ({ handleSubmit, pristine, reset, submitting }) => (
	<Card>
		<form onSubmit={handleSubmit}>
			<Heading>Newsletter</Heading>
			<Field
				name="username" type="text" component={renderField}
				label="Username"
			/>
			<Field
				name="email" type="email" component={renderField}
				label="Email"
			/>
			<Field
				name="age" type="number" component={renderField}
				label="Age"
			/>
			<Box>
				<Button type="submit" disabled={submitting}>
					Submit
				</Button>
				<ButtonOutline type="button" disabled={pristine || submitting} onClick={reset}>
					Clear Values
				</ButtonOutline>
			</Box>
		</form>
	</Card>
);

NewsletterForm.propTypes = {
	handleSubmit: PropTypes.func,
	pristine: PropTypes.bool,
	reset: PropTypes.func,
	submitting: PropTypes.bool,
};

export default reduxForm({
	validate,
	warn,
})(NewsletterForm);
