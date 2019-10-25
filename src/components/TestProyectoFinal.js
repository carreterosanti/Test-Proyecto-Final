import React, { Component } from "react";
import NavBar from "./NavBar";
import Editor from "./Editor";

export default function TestProyectoFinal() {
  return (
    <div nameClass="row" style={{ backgroundColor: "#474F5D", height: "100%" }}>
      <NavBar />
      <Editor />
    </div>
  );
}
