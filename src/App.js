import logo from './icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Pokemon Game</code>
        </p>
        <button
          className="App-link"
        >
          Click Here
        </button>
      </header>
    </div>
  );
}

export default App;
