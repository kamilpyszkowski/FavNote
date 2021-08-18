import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: auto 144px;
	grid-gap: 16px 32px;
	align-items: center;
	max-width: 70%;
`;

const StyledHeading = styled(Heading)`
	grid-area: 1 / 1 / 2 / 2;
`;

const StyledAvatar = styled.img`
	border-radius: 50%;
	width: 144px;
	height: 144px;
	grid-area: 1 / 2 / 2 / 3;
`;

const StyledParagraph = styled(Paragraph)`
	grid-column: 1 / 3;
	padding: 8px 0 48px;
`;

const StyledButton = styled(Button)`
	justify-self: start;
`;

const DetailsTemplate = ({ data, context: pageType }) => (
	<StyledContainer>
		<StyledHeading big>{data.title}</StyledHeading>
		{pageType === 'twitters' && (
			<StyledAvatar src={`http://unavatar.io/${data.twitterName}`} alt="avatar" />
		)}
		<StyledParagraph>{data.content}</StyledParagraph>
		{pageType !== 'notes' && (
			<StyledButton href={data.articleUrl}>
				Check the {pageType.slice(0, pageType.length - 1)}
			</StyledButton>
		)}
	</StyledContainer>
);

DetailsTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.object).isRequired,
	context: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

DetailsTemplate.defaultProps = {
	context: 'notes',
};

export default withContext(DetailsTemplate);
