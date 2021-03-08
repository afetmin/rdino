import React from 'react';
import Button, { ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'
import Input from './components/Input/input'
import Upload, { UploadFile } from './components/Upload/upload'

function App() {
  const defaultFileList: UploadFile[] = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }]
  return (
    <div className="App">
      <Input prepend='QQ' style={{ width: '500px' }}></Input>
      <Input disabled></Input>
      <Input size='sm'></Input>
      <Input icon={'angle-down'}></Input>
      <Input append='.com'></Input>
      <header className="App-header">
        <Menu defaultIndex={'0'}>
          <MenuItem index={'0'}>link1</MenuItem>
          <MenuItem index={'1'}>link2</MenuItem>
          <MenuItem index={'2'}>link3</MenuItem>
          <SubMenu title='link4'>
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
        </Menu>
        <Button>Hello</Button>
        <Button disabled>disabled button</Button>
        <Button btnType='primary' size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType='danger' size={ButtonSize.Small}>Small danger</Button>
        <Button btnType='link' href='http://www.baidu.com'>Link</Button>
        <Button btnType='link' href='http://www.baidu.com' disabled>Disabled Link</Button>
        <Alert type={AlertType.Default} closable title={'标题'} description={'描述'} onClose={() => { alert(123) }}></Alert>
        <Alert type={AlertType.Success} closable title={'标题'} description={'描述'} onClose={() => { alert(123) }}></Alert>
        <Alert type={AlertType.Danger} closable title={'标题'} onClose={() => { alert(123) }}></Alert>
        <Alert type={AlertType.Warning} closable title={'标题'} description={'描述'} onClose={() => { alert(123) }}></Alert>
      </header>
      <Upload drag defaultFileList={defaultFileList} action='http://jsonplaceholder.typicode.com/posts'></Upload>
    </div>
  );
}

export default App;
