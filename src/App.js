import React from "react";
import "./css/App.css";
import Navbar from "./Navbar";
import UrlShortener from "./UrlShortener";
import About from "./About";
import Redirector from "./Redirector";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <UrlShortener path="/shorter" />
        <About path="/shorter/about" />
        <Redirector path="/shorter/:link" />
      </Router>
    </div>
  );
}

export default App;
