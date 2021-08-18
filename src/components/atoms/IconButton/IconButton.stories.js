import React from 'react';
import styled from 'styled-components';

import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import IconButton from './IconButton';

export default {
	component: IconButton,
	title: 'Components/IconButton',
	decorators: [
		withKnobs,
		(Story) => {
			const YellowBg = styled.div`
				display: flex;
				align-items: center;
				justify-content: center;
				width: 250px;
				height: 250px;
				background-color: ${({ theme }) => theme.color.primary};
			`;
			return (
				<YellowBg>
					<Story />
				</YellowBg>
			);
		},
	],
};

export const Default = () => {
	const label = 'Icons';
	const options = {
		Bulb: 'iconBulb',
		Logout: 'iconLogout',
		Pen: 'iconPen',
		Plus: 'iconPlus',
		Twitter: 'iconTwitter',
	};
	const defaultValue = 'iconBulb';
	const groupId = 'GROUP-ID1';

	const value = select(label, options, defaultValue, groupId);
	return <IconButton active={boolean('Active toggle', false)} icon={value} />;
};
