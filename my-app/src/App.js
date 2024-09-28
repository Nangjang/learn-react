import "./App.css";
import { useState } from "react";

// Custom hook to manage input state
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App() {
  // Using custom hook for title input
  const [titleProps, resetTitle] = useInput("");
  // Using useState for color input
  const [color, setColor] = useState("#000000");

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault();
    // Display an alert with the input values
    alert(`${titleProps.value}, ${color}`);
    // Reset the input fields
    resetTitle();
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      {/* Text input for color title */}
      <input
        {...titleProps}
        type="text"
        placeholder="Color title..."
      />
      {/* Color input */}
      <input
        value={color}
        type="color"
        onChange={(e) => setColor(e.target.value)}
      />
      {/* Submit button */}
      <button>ADD</button>
    </form>
  );
}

export default App;