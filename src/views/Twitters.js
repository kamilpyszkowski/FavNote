/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from 'actions';

import Card from 'components/molecules/Card/Card';
import OverviewTemplate from 'templates/OverviewTemplate';
import UserPageTemplate from 'templates/UserPageTemplate';

const Twitters = () => {
	const twitters = useSelector((state) => state.twitters);

	return (
		<UserPageTemplate>
			<OverviewTemplate>
				{twitters && twitters.map((item) => <Card {...item} key={item._id} />)}
			</OverviewTemplate>
		</UserPageTemplate>
	);
};

export default Twitters;
