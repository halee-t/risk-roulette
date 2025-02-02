import React from "react";
import disasters from "./data/disasters.json"
import "./App.css";
import Question from "./components/question";
//import Landing from "./components/Landing";
//import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Question question={disasters[0].title} answers={disasters[0].answers} correct={disasters[0].correctness} disaster="flood"/>
    </div>
  );
}

export default App;
