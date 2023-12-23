import React from "react";
import "./default.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
const App = () => {
  return (
    <div className="App">
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
