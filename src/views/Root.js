import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes/routes';
import { Provider } from 'react-redux';

import store from 'store';

import MainTemplate from 'templates/MainTemplate';

import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import Details from 'views/Details';
import WelcomeBlock from 'views/WelcomeBlock';

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<MainTemplate>
				<Switch>
					<Route exact path="/" render={() => <Redirect to={routes.login} />} />
					<Route path={routes.notesId} component={Details} />
					<Route path={routes.twittersId} component={Details} />
					<Route path={routes.articlesId} component={Details} />
					<Route path={routes.articles} component={Articles} />
					<Route path={routes.twitters} component={Twitters} />
					<Route path={routes.notes} component={Notes} />
					<Route path={routes.login} component={WelcomeBlock} />
				</Switch>
			</MainTemplate>
		</BrowserRouter>
	</Provider>
);

export default Root;
