import styled from 'styled-components';

const Heading = styled.h1`
	font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	line-height: ${({ theme, big }) => (big ? theme.fontSize.xxl : theme.fontSize.xl)};
`;

export default Heading;
