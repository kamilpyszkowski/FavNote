import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';

import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledContainer = styled.header`
	padding: 30px 20px;
	position: sticky;
	inset: 0;
	background: linear-gradient(to bottom, white 90%, transparent);
	z-index: 2;
	width: calc(100% + 40px);
	margin-left: -20px;
`;

const StyledHeading = styled(Heading)`
	margin: 18px 0 6px;

	&::first-letter {
		text-transform: uppercase;
	}
`;

const StyledParagraph = styled(Paragraph)`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.gray400};
`;

const PageHeader = ({ context }) => (
	<StyledContainer>
		<Input search placeholder="Search" />
		<StyledHeading big>{context} view</StyledHeading>
		<StyledParagraph>6 {context}</StyledParagraph>
	</StyledContainer>
);

PageHeader.propTypes = {
	context: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

PageHeader.defaultProps = {
	context: 'notes',
};

export default withContext(PageHeader);
