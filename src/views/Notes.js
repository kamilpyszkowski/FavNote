/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';

import Card from 'components/molecules/Card/Card';
import UserPageTemplate from 'templates/UserPageTemplate';
import OverviewTemplate from 'templates/OverviewTemplate';

const Notes = () => {
	const notes = useSelector((state) => state.notes);

	return (
		<UserPageTemplate>
			<OverviewTemplate>
				{notes && notes.map((item) => <Card {...item} key={item._id} />)}
			</OverviewTemplate>
		</UserPageTemplate>
	);
};

export default Notes;
