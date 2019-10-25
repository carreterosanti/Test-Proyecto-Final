import React, { Component } from "react";
import GridLayout from "react-grid-layout";
import Editor from "./Editor.js";

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 20 },
      { i: "b", x: 1, y: 0, w: 1, h: 45 },
      { i: "c", x: 0, y: 1, w: 1, h: 45 },
      { i: "d", x: 1, y: 1, w: 1, h: 20 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={2}
        rowHeight={1}
        width={window.innerWidth}
      >
        <div key="a" style={{ backgroundColor: "#D0CEE2" }}>
          Consigna
        </div>
        <div key="b" style={{ backgroundColor: "#FAD9D5" }}>
          Vista Interactiva
        </div>
        <div
          key="c"
          style={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
            backgroundColor: "#F5F5F5"
          }}
        >
          <Editor />
        </div>
        <div key="d" style={{ backgroundColor: "#B2C2B1" }}>
          Banco de Test
          <button onClick={console.log("GO")}>Hola Che</button>
        </div>
      </GridLayout>
    );
  }
}

export default MyFirstGrid;
