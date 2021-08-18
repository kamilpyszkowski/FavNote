import React from 'react';
import AppContext from 'context';

const withContext = (Component) => (props) => (
	<AppContext.Consumer>
		{(context) => <Component {...props} context={context} />}
	</AppContext.Consumer>
);

export default withContext;
