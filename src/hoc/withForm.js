import React from 'react';
import { useForm } from 'react-hook-form';

const withForm = (Component) => (props) => {
	const formMethods = useForm();
	return <Component {...props} {...formMethods} />;
};

export default withForm;
