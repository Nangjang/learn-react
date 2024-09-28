import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

function App() {
  // useReducer hook to manage the checkbox state directly with a function
  const [checked, toggleChecked] = useReducer(checked => !checked, false);

  return (
    <div className="App">
      {/* Checkbox input */}
      <input
        type="checkbox"
        value={checked}
        onChange={toggleChecked}
      />
      {/* Label displaying the checkbox state */}
      <label>{checked ? 'Checked' : 'Not Checked'}</label>
    </div>
  );
}

export default App;