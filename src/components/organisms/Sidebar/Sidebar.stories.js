import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Sidebar from './Sidebar';

export default {
	component: Sidebar,
	title: 'Organisms/Sidebar',
};

export const Default = () => (
	<MemoryRouter>
		<Sidebar />
	</MemoryRouter>
);
