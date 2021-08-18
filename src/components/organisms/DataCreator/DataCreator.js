import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addItem, fetchItems } from 'actions';

import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledTextArea = styled(Input)`
	min-height: 450px;
	resize: none;
	margin-bottom: 24px;
	border-radius: 20px;
`;

const StyledContainer = styled.div`
	position: fixed;
	width: 40vw;
	height: 100vh;
	right: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	background: white;
	padding: 30px 40px;
	z-index: 2;
	border-left: 10px solid ${({ theme, currentColor }) => theme.color[currentColor]};
	box-shadow: -50vw 0 0 10vw hsla(0, 0%, 0%, 0.3);
	transform: translateX(
		${({ isCreatorVisible }) => (isCreatorVisible ? '0' : 'calc(100% + 60vw)')}
	);
	transition: transform 0.3s ease-in-out;
`;

const StyledInput = styled(Input)`
	margin-bottom: 16px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const DataCreator = ({ context: pageType, isCreatorVisible, hideCreator }) => {
	const dispatch = useDispatch();
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		hideCreator();
		console.log(pageType, data);
		try {
			dispatch(addItem(pageType, data));
		} finally {
			dispatch(fetchItems(pageType));
		}
		reset();
	};
	return (
		<StyledContainer isCreatorVisible={isCreatorVisible} currentColor={pageType}>
			<Heading big>Add new {pageType}</Heading>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledInput
					{...register('title')}
					placeholder={
						pageType === 'twitters' ? `Who's this person...` : `What's the title...`
					}
					name="title"
					id="heading"
				/>
				{pageType === 'twitters' && (
					<StyledInput
						{...register('twitterName')}
						placeholder={`What's the profile name... eg. 'danabramov'`}
						name="twitterName"
						id="twitterName"
					/>
				)}
				{pageType === 'articles' && (
					<StyledInput
						{...register('articleUrl')}
						placeholder="The article link is..."
						name="articleUrl"
						id="articleUrl"
					/>
				)}
				<StyledTextArea
					as="textarea"
					{...register('content')}
					placeholder={
						pageType !== 'notes'
							? `Tell me something about this ${pageType}...`
							: 'This note begins like...'
					}
					name="content"
					id="content"
				/>
				<Button type="submit">Add new {pageType}</Button>
			</StyledForm>
		</StyledContainer>
	);
};

DataCreator.propTypes = {
	context: PropTypes.oneOf(['notes', 'articles', 'twitters']),
	isCreatorVisible: PropTypes.bool.isRequired,
	hideCreator: PropTypes.func.isRequired,
};

DataCreator.defaultProps = {
	context: 'notes',
};

export default withContext(DataCreator);
