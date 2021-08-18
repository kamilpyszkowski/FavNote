import PropTypes from 'prop-types';
import styled from 'styled-components';

import iconBulb from 'assets/bulb.svg';
import iconLogout from 'assets/logout.svg';
import iconPen from 'assets/pen.svg';
import iconPlus from 'assets/plus.svg';
import iconTwitter from 'assets/twitter.svg';

const icons = {
	iconBulb,
	iconLogout,
	iconPen,
	iconPlus,
	iconTwitter,
};

const IconButton = styled.button`
	display: block;
	width: 67px;
	height: 67px;
	border-radius: 20px;
	background-image: url(${({ icon }) => icons[icon]});
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: 40%;

	&.active {
		background-color: white;
	}
`;

IconButton.propTypes = {
	icon: PropTypes.string.isRequired,
};

export default IconButton;
