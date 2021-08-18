/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchItems } from 'actions';

import Card from 'components/molecules/Card/Card';
import OverviewTemplate from 'templates/OverviewTemplate';
import UserPageTemplate from 'templates/UserPageTemplate';

const Articles = () => {
	const articles = useSelector((state) => state.articles);

	return (
		<UserPageTemplate>
			<OverviewTemplate>
				{articles && articles.map((item) => <Card {...item} key={item._id} />)}
			</OverviewTemplate>
		</UserPageTemplate>
	);
};

export default Articles;
