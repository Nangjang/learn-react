import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, About, Contact, History } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Create the root element for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define the main route for the App component */}
        <Route path="/" element={<App />} />
        
        {/* Define the route for the About component with a nested route for History */}
        <Route path="/about" element={<About />}>
          <Route path="history" element={<History />} />
        </Route>
        
        {/* Define the route for the Contact component */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();