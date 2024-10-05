import "./App.css";
import { Link } from "react-router-dom";

// Array of Tahoe peaks with their elevations
const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 }
];

// Navigation component to render the navigation menu
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

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

function About() {
  return (
    <>
      <Nav />
      <h1>About Us</h1>
      <p>Learn more about us.</p>
    </>
  );
}

function Contact() {
  return (
    <>
      <Nav />
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
    </>
  );
}

function App() {
  // Render the List component with tahoe_peaks data
  return (
    <>
      <Nav />
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
    </>
  );
}

export { App, About, Contact };