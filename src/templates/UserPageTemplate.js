import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sidebar from 'components/organisms/Sidebar/Sidebar';

const StyledContainer = styled.main`
	padding: 50px 80px 50px 233px;
`;

const UserPageTemplate = ({ children, currentPage }) => (
	<>
		<Sidebar currentPage={currentPage} />
		<StyledContainer>{children}</StyledContainer>
	</>
);

UserPageTemplate.propTypes = {
	currentPage: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]).isRequired,
};

UserPageTemplate.defaultProps = {
	currentPage: 'notes',
};

export default UserPageTemplate;
