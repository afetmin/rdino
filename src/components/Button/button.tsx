import React from 'react'
// 方便编辑classname的库
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string
}
// button
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// a
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// Partial将属性都变成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
// Buttonprops 是props的类型
const Button: React.FC<ButtonProps> = (props) => {
  const { btnType,
    className, //用户自定义的classname
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType, // key值不确定时用[]括起来
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled // a标签上的disabled需要加在classname上
  })
  // 特殊情况
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    // 一般情况
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button