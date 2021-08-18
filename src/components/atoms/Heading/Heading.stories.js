import React from 'react';
import Heading from './Heading';

export default {
	component: Heading,
	title: 'Components/Heading',
};

export const Default = () => <Heading>Heading</Heading>;
export const Big = () => <Heading big>Heading</Heading>;
