import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Homeboy from "./components/Homeboy";
import Wheel from "./components/Wheel";

function App() {
  return (
    <Router>
      <div className="App bg-background min-w-screen min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Homeboy />
              </>
            }
          />
          <Route path="/wheel" element={<Wheel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
