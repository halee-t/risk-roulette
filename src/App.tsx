import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Homeboy from "./components/Homeboy";

function App() {
  return (
    <Router>
      <div className="App bg-background min-w-screen min-h-screen">
        <Navbar />
        <Landing />
        <Homeboy />
      </div>
    </Router>
  );
}

export default App;
