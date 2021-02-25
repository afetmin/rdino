import React from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface BaseAlertProps {
  className?: string;
  closable?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  type?: AlertType;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    type,
    description,
    title,
    closable,
    onClose,
    className,
    ...restProps
  } = props
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
    'alert-with-description': !!description,
    'closable': closable
  })

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClose?.(e);
  };

  const renderCloseIcon = () =>
    closable ? (
      <button
        type='button'
        className={'alert-close-icon'}
        onClick={handleClose}
      >
        关闭
      </button>
    ) : null

  return (
    <div
      className={classes}
      {...restProps}
    >
      <div className={'alert-title'}>{title}</div>
      <div className={'alert-description'}>{description}</div>
      {renderCloseIcon()}
    </div>
  )
}

Alert.defaultProps = {
  closable: true,
  type: AlertType.Default
}

export default Alert