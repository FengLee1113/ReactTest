import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

const prefixCls = 'uisf-cell';

let Cell = (props) =>{
	let {title,descripe,arrow,onTap,className, ...others}=props;
	const cls = classNames({
		[prefixCls]: true,
		[className]: className
	})
	if (arrow && typeof  arrow === 'boolean') {
    	arrow = 'right';
  	}
	return(
		<Tappable className={cls} onTap={onTap} component='label'>
			<div className={`${prefixCls}-content`}>
				{
					!!title&&
					<div className={`${prefixCls}-content-title`}>
						{title}
					</div>
				}
				{
					!!descripe&&
					<div className={`${prefixCls}-content-desc`}>
						{descripe}
					</div>
				}
			</div>
			{
				!!arrow&&
				<div className={`${prefixCls}-arrow`}>
					<div className={`${prefixCls}-arrow-block ${prefixCls}-arrow-block-${arrow}`}></div>
				</div>
			}
		</Tappable>
	);
}
Cell.propTypes = {
	title: 		PropTypes.any,
	descripe: 	PropTypes.any,
	arrow: 		PropTypes.oneOf(['up','down','right','empty',true,false]),
	onTap: 		PropTypes.func,
}

export default Cell;