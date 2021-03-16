// import React from 'react';
// import {render} from 'react-dom'
// import App from './App'
// import './common/scss/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

// render(<App></App>,document.getElementById('root'))


export { default as Button } from './components/Button'
export { default as Menu } from './components/Menu'
export { default as Icon } from './components/Icon'
export { default as Input } from './components/Input'
export { default as Progress } from './components/Progress'
export { default as Transition } from './components/Transition'
export { default as Upload } from './components/Upload'