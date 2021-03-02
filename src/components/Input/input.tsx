import React, { ReactElement, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon'
// omit 忽略类型中的某个属性
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: 'lg' | 'sm';
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    disabled,
    className,
    style,
    size,
    icon,
    prepend,
    append,
    ...restProps
  } = props
  const classes = classNames('rdino-input', className, {
    [`input-${size}`]: size,
    'input-group': prepend || append,
  })
  return (
    <div
      className={classes}
      style={style}
    >
      {prepend && <div className='input-prepend'>{prepend}</div>}
      <input
      className='input-inner'
        disabled={disabled}
        {...restProps}
      >
      </input>
      { icon && <div className='icon-wrapper'><Icon icon={icon}></Icon></div>}
      {append && <div className='input-append'>{append}</div>}
    </div>

  )
}

export default Input