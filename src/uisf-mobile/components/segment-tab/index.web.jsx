import React,{PropTypes} from 'react';
import classNames from 'classnames';
import RcTabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import PureRenderHOC from './../../utils/hoc/index';

const prefixCls = 'uisf-segment-tabs';


let SegmentTab =(props)=> {
	let {
		animation,
		children,
		transitionName,
		className,
		...others
	} = props;

	if(!animation){
		transitionName = {};
		animation = '';
	}
	const cls = classNames({
		[`${prefixCls}-no-animation`]: !animation,
		[className]: className
	})
	return(
		<RcTabs
		{...others}
		className={cls}
		allowScrollBar={false}
		prefixCls={prefixCls}
		transitionName={transitionName}
		// allowInkBar={false}
		renderTabBar={()=><ScrollableInkTabBar />}
		renderTabContent={()=><TabContent animatedWithMargin/>}
		destroyInactiveTabPane={true}
		>
			{children}
		</RcTabs>
	)
}
SegmentTab.propTypes = {
	animation: 			PropTypes.bool,
	onChange: 			PropTypes.func,
	activeKey: 			PropTypes.string,
	defaultActiveKey: 	PropTypes.string,
	transitionName: 	PropTypes.object
}
SegmentTab.defaultProps = {
  animation: true,
  transitionName: {
    backward : 'uisf-am-slide-horizontal-backward',
    forward: 'uisf-am-slide-horizontal-forward'
  }
};
SegmentTab = PureRenderHOC(SegmentTab);
const Panel = (props) => {
	return(
		<RcTabs.TabPane {...props} />
	)
}

Panel.propTypes = {
	tab: 		PropTypes.string,
	disabled: 	PropTypes.bool
}

Panel.defaultProps = {
	disabled: false
}

SegmentTab.Panel = PureRenderHOC(Panel);
export default SegmentTab;