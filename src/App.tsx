import React from "react";
import "./App.css";
import Question from "./components/question";
//import Landing from "./components/Landing";
//import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen flex flex-col justify-end">
      <div className="h-2/5 bg-blue-500">
        <Question
          question="Halee Look at This!!!!!" 
          answers={["False","Flase", "True", "Flask"]} 
          correct={[false, false, true, false]}/>
      </div>
    </div>
  );
}

export default App;
