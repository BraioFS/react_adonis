import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/HeaderComponents";
import RoutesApp from "./pages/routes";
import { PageBackgroundColorProvider } from "./providers/PageBackgroundColorProvider";

function App() {
  return (
    <Router>
      <Header />
      <PageBackgroundColorProvider>
        <RoutesApp />
      </PageBackgroundColorProvider>
    </Router>
  );
}

export default App;
