// Import React hooks and assets
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./components/Hello";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

// Main App component
function App() {
  return (
    <>
      {/* Header section with logos */}
      <header>
        <div className="logo">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      </header>

      {/* Hello component */}
      <Hello />

      {/* Dashboard component */}
      <Dashboard />

      {/* Footer component */}
      <Footer />
    </>
  );
}

// Export the App component
export default App;
