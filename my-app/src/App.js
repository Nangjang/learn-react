import "./App.css";
import { useState } from "react";

function App() {
  // State to manage the title input
  const [title, setTitle] = useState("");
  // State to manage the color input
  const [color, setColor] = useState("#000000");

  // Log the current title and color to the console
  console.log(title, color);

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault();
    // Display an alert with the input values
    alert(`${title}, ${color}`);
    // Clear the input fields
    setTitle("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      {/* Text input for color title */}
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="Color title..."
      />
      {/* Color input */}
      <input
        value={color}
        type="color"
        onChange={(event) => setColor(event.target.value)}
      />
      {/* Submit button */}
      <button>ADD</button>
    </form>
  );
}

export default App;