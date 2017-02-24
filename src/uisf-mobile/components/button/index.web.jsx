import React,{PureComponent,PropTypes} from 'react';
import classNames from 'classnames';

const Button = props =>{
	const {type,size,disabled,plain,inline,onTap,className,...others} = props;
	const cls = classNames('uisf-btn',{
		[`uisf-btn-${type}`]: 		!plain,
		[`uisf-btn-plain-${type}`]: plain,
		'uisf-btn-small': 			size==='small',
		'uisf-btn-disabled': 		disabled,
		'uisf-btn-inline': 			inline,
		[className]: 				className
	})
	return (
		<button {...others}
			onClick={disabled ? null : onTap}
			className={cls}
			disabled={disabled}
		></button>
	)
};

Button.proptypes = {
	type: 		React.PropTypes.oneOf(['default','primary','warn']),
	size: 		React.PropTypes.oneOf(['default','small']),
	disabled: 	React.PropTypes.bool,
	plain: 		React.PropTypes.bool,
	inline: 	React.PropTypes.bool,
	className: 	React.PropTypes.string,
	onTap: 		React.PropTypes.func
}

Button.defaultProps = {
	type: 		'default',
	size: 		'default',
	disabled: 	false,
	plain: 		false,
	inline: 	false,
}
export default Button;