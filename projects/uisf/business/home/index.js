import React,{PureComponent} from 'react';
import ReactDom from 'react-dom';
import Button from '../../../../src/uisf-mobile/components/button/index';
import Cell from '../../../../src/uisf-mobile/components/cell/index';
// import RcCollapse from 'rc-collapse';
import {SegmentTab} from 'uisf-mobile';

// import SegmentTab from '../../../../src/uisf-mobile/components/segment-tab/index';

import './index.less';
// import './new.less';

export default class Home extends PureComponent{
	constructor(props) {
		super(props);
		this.state={
			// autoClose: false
			isClose: true
		}
	}
	changeHandler = (activeKey) =>{

	}
	render(){
		return(
			<div>
				<Accordion defaultActiveKey='2'>
					<Accordion.Panel header='first' key='1'>
						aaaaaaaaaaaaaaaaaaaa
					</Accordion.Panel>
					<Accordion.Panel header='secoon' key='2'>
						bbbbbbbbbbbbbbbbbbb
					</Accordion.Panel>
				</Accordion>

				<SegmentTab style={{marginTop: 50}}>
		          <SegmentTab.Panel tab="第一项" key="1">第一项内容</SegmentTab.Panel>
		          <SegmentTab.Panel tab="第二项" key="2">第二项内容</SegmentTab.Panel>
		          <SegmentTab.Panel tab="第三项" key="3">第三项内容</SegmentTab.Panel>
		          <SegmentTab.Panel tab="第四项" key="4">第四项内容</SegmentTab.Panel>
		        </SegmentTab>


			</div>
		)
	}
}