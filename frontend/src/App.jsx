import React from "react";
import BrokenSample from "./components/BrokenSample";
import IntentionallyBroken from "./components/IntentionallyBroken"; // Intentionally broken import
import BrokenAgain from "./components/BrokenAgain"; // Intentionally broken component

function App() {
  return (
    <div>
      <h1>To-Do Organizer</h1>
      {/* Intentional build error below - do not modify */}
      <BrokenSample />
      {/* Importing intentionally broken component for build failure */}
      <IntentionallyBroken />
      {/* New intentionally broken component */}
      <BrokenAgain />
    </div>
  );
}

export default App;
