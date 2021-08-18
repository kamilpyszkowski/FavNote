/* eslint-disable react/no-unused-state */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import GlobalStyle from 'themes/GlobalStyle';
import { mainTheme } from 'themes/mainTheme';
import { ThemeProvider } from 'styled-components';
import AppContext from 'context';

const MainTemplate = ({ location, children }) => {
	const getPageType = () => {
		const pageTypes = ['notes', 'articles', 'twitters'];
		const currentPage = pageTypes.find((item) => location.pathname.includes(item));
		return currentPage;
	};

	const [state, setState] = useState(getPageType());

	useEffect(() => {
		setState(getPageType());
	});

	return (
		<AppContext.Provider value={state}>
			<GlobalStyle />
			<ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
		</AppContext.Provider>
	);
};

MainTemplate.propTypes = {
	children: PropTypes.element.isRequired,
	location: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withRouter(MainTemplate);
