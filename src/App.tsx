import React from "react";
import "./App.css";
import Question from "./components/question";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
