import React from 'react';
import Input from './Input';

export default {
	component: Input,
	title: 'Components/Input',
};

export const Default = () => <Input placeholder="Login" />;
export const Search = () => <Input search placeholder="Search" />;
