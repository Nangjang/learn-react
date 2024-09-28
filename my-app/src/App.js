import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [game, setGame] = useState('Mario');

  return (
    <div className="App">
      <h1>My favourite game is {game}.</h1>
      <button onClick={() => setGame('Zelda')}>Change Game</button>
      <button onClick={() => setGame('Mario')}>Reset Game</button>
    </div>
  );
}

export default App;