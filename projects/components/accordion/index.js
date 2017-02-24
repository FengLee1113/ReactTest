import React,{PropTypes} from 'react';
import RcCollapse from 'rc-collapse';
import classNames from 'classnames';
import PureRenderHOC from '../../../src/uisf-mobile/utils/hoc/index';

const prefixCls = 'uisf-collapse';


let Accordion = (props) => {
	let {
		autoClose,
		children,
		...others
	} = props;
	if(!children.length){
		children = [children];
	}
	return (
		<RcCollapse {...others} className={prefixCls} accordion={autoClose}>
			{
				children.map((child)=>{
					const props = child.props;
					return (
						<RcCollapse.Panel {...props} key={child.key} />
					)
				})
			}
		</RcCollapse>
	)
}
Accordion.propTypes = {
	autoClose: PropTypes.bool,
	activeKey: PropTypes.string,
	defaultActiveKey: PropTypes.string,
	onChange: PropTypes.func
}
Accordion.defaultProps = {
	autoClose: true
}
const Panel = (props)=>{
	const {children,...others} = props;
	return(
		<div {...others}>
			{children}
		</div>
	)
}
Panel.propTypes={
	header: PropTypes.any
}
Accordion = PureRenderHOC(Accordion);
Accordion.Panel = PureRenderHOC(Panel);
export default Accordion;