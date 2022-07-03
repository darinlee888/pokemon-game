import logo from './icon.svg';
import './App.css';
import { useState } from 'react';
import SelectScreen from './SelectScreen';

function App() {
  const [screen, setScreen] = useState("home");
  const [name, setName] = useState("Player One");
  const [number, setNumber] = useState(1);
  const [playerOnePokemon, setPlayerOnePokemon] = useState([]);
  const [playerTwoPokemon, setPlayerTwoPokemon] = useState([]);

  function handleName() {
    if (name === "") {
      window.alert("Name cannot be empty.");
    }
    else {
      setScreen("number");
    }
  }

  function handleNumber() {
    if (number >= 6 || number <= 0) {
      window.alert("You can have 1-5 Pokemon.");
    }
    else {
      setScreen("select");
    }
  }

  const addPlayerOnePokemon = (newPokemon) => setPlayerOnePokemon(playerOnePokemon => [...playerOnePokemon, newPokemon]);
  const addPlayerTwoPokemon = (newPokemon) => setPlayerTwoPokemon(playerTwoPokemon => [...playerTwoPokemon, newPokemon]);

  function startBattle() {
    setScreen("result");
  }

  if (screen === "name") {
    return(
      <div className="App">
        <header className="App-header">
          <p>
            <code>What is your name?</code>
          </p>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputBox"
          />
          <button
            id="continue"
            onClick={handleName}
          >
            Continue
          </button>
        </header>
      </div>
    );
  }
  if (screen === "number") {
    return(
      <div className="App">
        <header className="App-header">
          <p>
            <code>How many Pokemon do you want to battle with?</code>
          </p>
          <input 
            type="number" 
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
            className="inputBox"
          />
          <button
            id="continue"
            onClick={handleNumber}
          >
            Continue
          </button>
        </header>
      </div>
    );
  }
  if (screen === "select") {
    return (
      <SelectScreen changeScreen={startBattle} name={name} number={number} 
      playerOnePokemon={playerOnePokemon} addPlayerOnePokemon={addPlayerOnePokemon}
      playerTwoPokemon={playerTwoPokemon} addPlayerTwoPokemon={addPlayerTwoPokemon}/>
    );
  }
  if (screen === "result") {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <code>Thanks for Playing!</code>
          </p>
        </header>
      </div>
    );
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
          onClick={() => setScreen("name")}
        >
          Click Here
        </button>
      </header>
    </div>
  );
}

export default App;
