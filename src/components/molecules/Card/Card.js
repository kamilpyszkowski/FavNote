import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';

import { removeItem as removeItemAction } from 'actions';

import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

import iconLink from 'assets/link.svg';

const StyledContainer = styled.div`
	box-shadow: 0 15px 20px -15px hsla(0, 0%, 0%, 0.2), 0 0 15px -5px hsla(0, 0%, 0%, 0.1);
	border-radius: 10px;
	overflow: hidden;
	max-width: 506px;
`;

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	${({ title }) =>
		title &&
		css`
			justify-content: center;
			padding: 17px 30px;
			min-height: 100px;
			background-color: ${({ theme, currentColor }) => theme.color[currentColor]};
		`}

	${({ content }) =>
		content &&
		css`
			justify-content: space-between;
			height: auto;
			padding: 27px 30px 17px;
			min-height: 250px;
		`}
`;

const StyledTitle = styled(Heading)`
	margin: 5px 0 0;
`;

const StyledButton = styled(Button)`
	position: absolute;
	bottom: 17px;
`;

const StyledTwitterImage = styled.img`
	width: 92px;
	aspect-ratio: 1/1;
	border-radius: 50%;
	border: 5px solid ${({ theme }) => theme.color.twitters};
	position: absolute;
	top: 17px;
	right: 30px;
`;

const StyledArticleLink = styled.a`
	height: calc(100% - 34px);
	aspect-ratio: 1/1;
	border-radius: 50%;
	position: absolute;
	top: 17px;
	right: 30px;
	background: ${({ theme }) => theme.color.gray100} url(${iconLink}) center/60% no-repeat;
`;

const Card = ({ _id: id, context: type, title, twitterName, articleUrl, content, removeItem }) => {
	const [redirect, setRedirect] = useState(false);
	const handleCardClick = () => setRedirect((prevState) => ({ redirect: !prevState }));

	if (redirect) {
		return <Redirect to={`${type}/${id}`} />;
	}

	return (
		<StyledContainer>
			<StyledWrapper onClick={handleCardClick} title={title} currentColor={type}>
				<StyledTitle>{title}</StyledTitle>
				{type === 'twitters' && (
					<StyledTwitterImage src={`http://unavatar.io/${twitterName}`} />
				)}
				{type === 'articles' && <StyledArticleLink href={articleUrl} />}
			</StyledWrapper>
			<StyledWrapper content={content}>
				<Paragraph>{content}</Paragraph>
				<StyledButton secondary onClick={() => removeItem(type, id)}>
					Remove
				</StyledButton>
			</StyledWrapper>
		</StyledContainer>
	);
};

Card.propTypes = {
	_id: PropTypes.string.isRequired,
	context: PropTypes.oneOf(['notes', 'articles', 'twitters']),
	title: PropTypes.string.isRequired,
	twitterName: PropTypes.string,
	articleUrl: PropTypes.string,
	content: PropTypes.string.isRequired,
	removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
	twitterName: null,
	articleUrl: null,
	context: 'notes',
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (itemType, itemId) => dispatch(removeItemAction(itemType, itemId)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
