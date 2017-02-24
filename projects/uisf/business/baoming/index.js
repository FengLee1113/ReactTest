import React from 'react';
import ReactDom from 'react-dom';
import antd from 'antd';

const prefixCls = 'demo-baoming';
export default class Baoming extends React.Component{
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
			<div className={prefixCls} >
				<p>this is baoming page!!!!!</p>
			</div>
		)
	}
}