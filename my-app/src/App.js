import "./App.css";

// Array of Tahoe peaks with their elevations
const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 }
];

// List component to render a list of items
function List({ data, renderItem, renderEmpty }) {
  // Render the empty state if data is empty, otherwise render the list of items
  return !data.length ? (
    renderEmpty()
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

function App() {
  // Render the List component with tahoe_peaks data
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={() => <p>This list is empty.</p>}
      renderItem={(item) => (
        <>
          <h2>{item.name}</h2>
          <p>{item.elevation} ft.</p>
        </>
      )}
    />
  );
}

export default App;