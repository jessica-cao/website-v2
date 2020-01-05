import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
        <div className="App-container-landing">
          <h4>Hello, I'm</h4>
          <h4>Jessica</h4>
        </div>
        <div className="tag-line">
        <p>
        Computer Science student | Web development enthusiast | Crippling Optimist
        </p>
        </div>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
      </header>
    </div>
  );
}

export default App;
