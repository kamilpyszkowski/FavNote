import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import { useDispatch } from 'react-redux';
import { fetchItems } from 'actions';

import PageHeader from 'components/molecules/PageHeader/PageHeader';
import IconButton from 'components/atoms/IconButton/IconButton';
import DataCreator from 'components/organisms/DataCreator/DataCreator';

const StyledCardWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
	grid-gap: 40px;
`;

const StyledCreatorButton = styled(IconButton)`
	border-radius: 50%;
	background-color: ${({ theme, activeColor }) => theme.color[activeColor]};
	background-size: 35%;
	position: fixed;
	bottom: 40px;
	right: 40px;
	z-index: 3;
`;

const OverviewTemplate = ({ context, children }) => {
	const [isCreatorVisible, setCreatorVisible] = useState(false);
	const dispatch = useDispatch();

	dispatch(fetchItems(context));

	const toggleCreator = () => {
		setCreatorVisible((prevState) => !prevState);
	};

	return (
		<>
			<PageHeader />
			<StyledCardWrapper>
				{children}
				<StyledCreatorButton
					icon="iconPlus"
					activeColor={context}
					onClick={() => toggleCreator()}
				/>
				<DataCreator
					hideCreator={() => toggleCreator()}
					isCreatorVisible={isCreatorVisible}
				/>
			</StyledCardWrapper>
		</>
	);
};

OverviewTemplate.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	context: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

OverviewTemplate.defaultProps = {
	context: 'notes',
};

export default withContext(OverviewTemplate);
