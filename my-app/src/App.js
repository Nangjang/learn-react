import "./App.css";
import { useRef } from "react";

function App() {
  // useRef hooks to reference the input elements
  const txtTitle = useRef();
  const hexColor = useRef();

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault();
    // Get the values from the input elements
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    // Display an alert with the input values
    alert(`${title}, ${color}`);
    // Clear the input fields
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      {/* Text input for color title */}
      <input
        ref={txtTitle}
        type="text"
        placeholder="Color title..."
      />
      {/* Color input */}
      <input ref={hexColor} type="color" />
      {/* Submit button */}
      <button>ADD</button>
    </form>
  );
}

export default App;