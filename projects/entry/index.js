import 'es6-promise-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import AppRoute from '../routers/index';

ReactDom.render(
	<AppRoute />, document.getElementById('react-content')
);