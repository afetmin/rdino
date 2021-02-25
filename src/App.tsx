import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
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
        <Alert type={AlertType.Default} closable title={'标题'} description={'描述'} onClose={() => {alert(123)}}></Alert>
        <Alert type={AlertType.Success} closable title={'标题'} description={'描述'} onClose={() => {alert(123)}}></Alert>
        <Alert type={AlertType.Danger} closable title={'标题'} description={'描述'} onClose={() => {alert(123)}}></Alert>
        <Alert type={AlertType.Warning} closable title={'标题'} description={'描述'} onClose={() => {alert(123)}}></Alert>
      </header>
    </div>
  );
}

export default App;
