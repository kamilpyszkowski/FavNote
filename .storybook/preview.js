import React from 'react';
import GlobalStyle from '../src/themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../src/themes/mainTheme';

export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<ThemeProvider theme={mainTheme}>
				<Story />
			</ThemeProvider>
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
