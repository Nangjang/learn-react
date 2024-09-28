import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // State to manage the current game
  const [game, setGame] = useState('Mario');
  
  // State to manage the count
  const [count, setCount] = useState(0);

  // Effect to log the current game whenever it changes
  useEffect(() => {
    console.log(`The game is ${game}.`);
  }, [game, count]);

  // Effect to log the current count whenever it changes
  useEffect(() => {
    console.log(`The count is ${count}.`);
  }, [count]);

  return (
    <div className="App">
      <h1>My favourite game is {game}.</h1>
      {/* Button to change the game to Zelda */}
      <button onClick={() => setGame('Zelda')}>Change Game</button>
      {/* Button to reset the game to Mario */}
      <button onClick={() => setGame('Mario')}>Reset Game</button>
      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;