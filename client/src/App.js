import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./pages/routes";
import { PageBackgroundColorProvider } from "./providers/PageBackgroundColorProvider";

function App() {
  return (
    <Router>
      <PageBackgroundColorProvider>
        <RoutesApp />
      </PageBackgroundColorProvider>
    </Router>
  );
}

export default App;