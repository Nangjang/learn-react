// Import the useReducer hook from React
import { useReducer } from 'react';

// Define and export the Checkbox component
export function Checkbox() {
  // useReducer hook to manage the checked state
  // The reducer function toggles the checked state
  const [checked, toggle] = useReducer(checked => !checked, false);

  return (
    <>
      {/* Label for the checkbox, displaying the current state */}
      <label htmlFor="cbox">{checked ? 'Checked' : 'Not Checked'}</label>
      
      {/* Checkbox input element */}
      <input
        id="cbox" // Associate the label with this checkbox
        type="checkbox" // Input type is checkbox
        checked={checked} // Bind the checked state to the input
        onChange={toggle} // Toggle the checked state on change
      />
    </>
  );
}