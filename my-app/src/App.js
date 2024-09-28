import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [game, setGame] = useState('Mario');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`The game is ${game}.`);
  }, [game, count]);

  useEffect(() => {
    console.log(`The count is ${count}.`);
  }, [count]);

  return (
    <div className="App">
      <h1>My favourite game is {game}.</h1>
      <button onClick={() => setGame('Zelda')}>Change Game</button>
      <button onClick={() => setGame('Mario')}>Reset Game</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;