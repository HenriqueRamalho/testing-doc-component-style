import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import BoxWord from './components/boxWord';
import Input from './components/input';
import Counter from './components/counter';
import Thing from './components/thing';
import InputAlfa from './components/inputAlfa';
import ElementeRotating from './components/elementeRotating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a>
      </header>
      <div>
        <Button/>
        <BoxWord/>
        <Input/>
        <Counter/>
        <Thing/>
        <InputAlfa/>
        <ElementeRotating />
      </div>
    </div>
  );
}

export default App;
