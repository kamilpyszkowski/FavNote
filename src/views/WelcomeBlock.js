import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import store from 'store';
import { authenticate, fetchItems } from 'actions';
import PropTypes from 'prop-types';
import { routes } from 'routes/routes';
import { Redirect } from 'react-router';

import logo from 'assets/logo.svg';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
	background-color: ${({ theme }) => theme.color.notes};
`;

const StyledLogo = styled.img`
	width: 238px;
`;

const StyledHeading = styled(Heading)`
	margin: 42px 0 36px;
`;

const StyledWrapper = styled.div`
	background: white;
	border-radius: 20px;
	padding: 20px;
	width: 32vw;
	text-align: center;
`;

const StyledForm = styled.form`
	display: inline-flex;
	flex-direction: column;
	width: 100%;
`;

const StyledInput = styled(Input)`
	align-self: stretch;
	margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
	align-self: center;
	margin: ${({ secondary }) => (secondary ? '8px 10px 0' : '0 0 24px')};
`;

const StyledLink = styled.a`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	text-decoration: 3px underline ${({ theme }) => theme.color.notes};
`;

const WelcomeBlock = () => {
	const userID = useSelector((state) => state.userID);

	const [signUpMode, toggleMode] = useState(false);
	const handleModeToggle = () => toggleMode(!signUpMode);

	const { register, handleSubmit } = useForm();

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(authenticate(data));
	};

	if (userID) return <Redirect to={routes.notes} />;
	return (
		<StyledContainer>
			<StyledLogo src={logo} alt="FavNote" />
			<StyledHeading>Your new favourite online note experience</StyledHeading>
			<StyledWrapper>
				<Heading big>Sign {signUpMode ? 'up' : 'in'}</Heading>
				<StyledForm onSubmit={handleSubmit(onSubmit)}>
					<StyledInput {...register('username')} placeholder="Username" />
					<StyledInput {...register('password')} placeholder="Password" type="password" />
					<StyledButton type="submit">
						{signUpMode ? 'Create new account' : 'Enter Favnotes'}
					</StyledButton>
				</StyledForm>
				<Paragraph>
					{signUpMode ? 'Already have account?' : `Are you here for the first time?`}
					<StyledButton secondary onClick={() => handleModeToggle()}>
						{signUpMode ? 'Sign in' : 'Create new account'}
					</StyledButton>
				</Paragraph>
			</StyledWrapper>
		</StyledContainer>
	);
};

// WelcomeBlock.propTypes = {
// 	authenticate: PropTypes.func.isRequired,
// 	userID: PropTypes.string,
// };

// WelcomeBlock.defaultProps = {
// 	userID: null,
// };

// const mapStateToProps = ({ userID = null }) => ({ userID });

// const mapDispatchToProps = (dispatch) => ({
// 	authenticate: (data) => dispatch(authenticateAction(data)),
// });

export default WelcomeBlock;
