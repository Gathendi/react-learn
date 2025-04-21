// Import React hooks and assets
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Footer from "./components/globals/Footer";
import Homepage from "./components/pages/Homepage";
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
      {/* Homepage component */}
      <Homepage />

      {/* Footer component */}
      <Footer />
    </>
  );
}

// Export the App component
export default App;
