import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [game, setGame] = useState('Mario');

  useEffect(() => {
    console.log(`The game is ${game}.`);
  }, [game]);

  return (
    <div className="App">
      <h1>My favourite game is {game}.</h1>
      <button onClick={() => setGame('Zelda')}>Change Game</button>
      <button onClick={() => setGame('Mario')}>Reset Game</button>
    </div>
  );
}

export default App;