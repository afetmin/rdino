import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Hello</Button>
        <Button disabled>disabled button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small danger</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled>Disabled Link</Button>
      </header>
    </div>
  );
}

export default App;
