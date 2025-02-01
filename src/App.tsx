import React from "react";
import "./App.css";
import Question from "./components/question";
//import Landing from "./components/Landing";
//import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Question question="Oh no!" answers={["greg","abbott"]} correct={[true,false]}/>
    </div>
  );
}

export default App;
