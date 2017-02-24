import React , {Component,Link} from 'react';
import Header from '../header/index';
import Footer from '../footer/index';

const prefixCls = 'demo-first';

export default class App extends Component{

	render (){
		return(
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}