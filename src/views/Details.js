/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import backIcon from 'assets/back.svg';

import UserPageTemplate from 'templates/UserPageTemplate';
import DetailsTemplate from 'templates/DetailsTemplate';

const StyledBackButton = styled(Link)`
	display: block;
	width: 52px;
	height: 52px;
	background: url('${backIcon}') center/contain no-repeat;
	margin-bottom: 42px;
`;

const Details = ({ context: pageType, match }) => {
	const [note, setNote] = useState();

	const currentGlobalState = useSelector((state) => ({ ...state }));

	const getNote = async () => {
		if (currentGlobalState.hasOwnProperty.call(currentGlobalState, pageType)) {
			return currentGlobalState[pageType].find((item) => item._id === match.params.id);
		}
		return axios
			.get(`http://localhost:9000/api/note/${match.params.id}`)
			.then((fetched) => fetched.data)
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getNote().then(setNote);
	}, []);

	console.log(note);

	return (
		<UserPageTemplate currentPage={pageType}>
			<StyledBackButton to={`/${pageType}`} type="button" />
			<DetailsTemplate pageType={pageType} data={{ ...note }} />
		</UserPageTemplate>
	);
};

Details.propTypes = {
	context: PropTypes.oneOf(['notes', 'articles', 'twitters']),
	match: PropTypes.objectOf(PropTypes.object).isRequired,
};

Details.defaultProps = {
	context: 'notes',
};

export default withContext(Details);
