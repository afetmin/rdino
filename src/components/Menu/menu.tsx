import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'


type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({ index: 0 })


const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, defaultIndex, style, children, onSelect } = props
  const [currentIndex, setIndex] = useState(defaultIndex)
  const classes = classNames('rdino-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const handleSelect = (index: number) => {
    setIndex(index)
    if (onSelect) onSelect(index)
  }
  const passedContext: IMenuContext = {
    index: currentIndex ? currentIndex : 0,
    onSelect: handleSelect
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 自动为每一项添加index
        return React.cloneElement(childElement, {
          // index: index.toString()
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu