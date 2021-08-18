import React from 'react';

import { withKnobs, select } from '@storybook/addon-knobs';

import Card from './Card';

export default {
	component: Card,
	title: 'Molecules/Card',
	decorators: [withKnobs],
};

export const Default = () => {
	const label = 'Card type';
	const options = {
		Note: 'note',
		Twitter: 'twitter',
		Article: 'article',
	};
	const defaultValue = 'note';
	const groupId = 'GROUP-ID1';

	const value = select(label, options, defaultValue, groupId);
	return <Card cardType={value} />;
};
