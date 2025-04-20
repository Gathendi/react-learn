// Import React core utilities
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import styles and components
import "./index.css";
import App from "./App.jsx";

// Create React root and render the App component inside StrictMode
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
