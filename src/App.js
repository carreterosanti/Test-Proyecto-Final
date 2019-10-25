import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/react-grid-layout/css/styles.css";
import "./node_modules/react-resizable/css/styles.css";
import NavBar from "./components/NavBar";
import MainSpace from "./components/MainSpace";
import MyFirstGrid from "./components/MyFirstGrid";
import TestProyectoFinal from "./components/TestProyectoFinal";

function App() {
  return (
    <div className="App">
      <TestProyectoFinal />
    </div>
  );
}

export default App;
