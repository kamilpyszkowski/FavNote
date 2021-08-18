import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import { useDispatch } from 'react-redux';
import { logOut } from 'actions';

import Logo from 'assets/logo.svg';
import IconButton from 'components/atoms/IconButton/IconButton';

const StyledContainer = styled.nav`
	padding: 50px 0 20px;
	display: flex;
	flex-direction: column;
	width: 153px;
	height: 100vh;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme, currentColor }) => theme.color[currentColor]};
	position: fixed;
	inset: 0;
`;

const StyledMenuList = styled.ul`
	padding: 90px 0 0;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const StyledMenuItem = styled.li`
	&:last-child {
		margin-top: auto;
	}
`;

const StyledLogoLink = styled(NavLink)`
	width: 62px;
	height: 62px;
	background: url('${Logo}') top/contain no-repeat;
`;

const Sidebar = ({ context }) => {
	const dispatch = useDispatch();

	return (
		<StyledContainer currentColor={context}>
			<StyledLogoLink to="/" />
			<StyledMenuList>
				<StyledMenuItem>
					<IconButton as={NavLink} activeclass="active" to="/notes" icon="iconBulb" />
				</StyledMenuItem>
				<StyledMenuItem>
					<IconButton as={NavLink} activeclass="active" to="/articles" icon="iconPen" />
				</StyledMenuItem>
				<StyledMenuItem>
					<IconButton
						as={NavLink}
						activeclass="active"
						to="/twitters"
						icon="iconTwitter"
					/>
				</StyledMenuItem>
				<StyledMenuItem>
					<IconButton
						as={NavLink}
						onClick={() => dispatch(logOut())}
						to="/login"
						icon="iconLogout"
					/>
				</StyledMenuItem>
			</StyledMenuList>
		</StyledContainer>
	);
};

Sidebar.propTypes = {
	context: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

Sidebar.defaultProps = {
	context: 'notes',
};

export default withContext(Sidebar);
