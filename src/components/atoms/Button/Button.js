import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import withContext from 'hoc/withContext';

const StyledButton = styled.button`
	padding: 22px 68px;
	border-radius: 50px;
	background-color: ${({ context, theme }) =>
		context ? theme.color[context] : theme.color.notes};
	text-transform: uppercase;
	font-weight: 600;
	font-size: 16px;

	${({ secondary }) =>
		secondary &&
		css`
			padding: 12px 34px;
			background-color: ${({ theme }) => theme.color.gray200};
			font-size: 10px;
		`}
`;

const Button = ({ href, ...props }) => <StyledButton {...props} as={href && 'a'} />;

Button.propTypes = {
	href: PropTypes.string,
};

Button.defaultProps = {
	href: null,
};

export default withContext(Button);
