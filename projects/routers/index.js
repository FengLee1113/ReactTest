import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect,Redirect, browserHistory, hashHistory} from 'react-router';

import App from '../uisf/business/App/index';
import Footer from '../uisf/business/footer/index';
import Header from '../uisf/business/header/index';
import home from '../uisf/business/home/index';
import Baoming from '../uisf/business/baoming/index';

const AppRoute = function(){
	return (
		<Router history={hashHistory}>
	      	<Route path="/" component={App}>
	      		<IndexRoute component={home}/>
				<Route path='header' component={Header} />
				<Route path='footer' component={Footer} />
				<Route path='baoming' component={Baoming} />
			</Route>
		</Router>
	)
}
export default AppRoute;