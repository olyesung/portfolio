import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootHome from "./Routes/RootHome";
import Profile from "./Components/Profile";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Project";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<RootHome />} />
      </Routes>
    </Router>
  );
}

export default App;
