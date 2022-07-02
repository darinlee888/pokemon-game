import logo from './icon.svg';
import './App.css';
import { useState } from 'react';
import SelectScreen from './SelectScreen';

function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "select") {
    return (
      <SelectScreen/>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Pokemon Game</code>
        </p>
        <button
          className="App-link"
          onClick={() => setScreen("select")}
        >
          Click Here
        </button>
      </header>
    </div>
  );
}

export default App;
