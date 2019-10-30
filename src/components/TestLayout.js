import React from "react";
import AceEditor from "react-ace";

export default function TestLayout() {
  return (
    <div className="in-body">
      <nav>
        <h1 className="nav-text-logo">Test Proyecto Final Carretero-Covelli</h1>
      </nav>

      <main>
        <div className="vertical-splitter">
          <div className="div-l">
            <div className="div-consigna"></div>
            <div className="div-editor">
              <AceEditor theme="tomorrow-night" width="100%" height="100%" />
            </div>
          </div>

          <div className="div-r">
            <div className="div-interactive-view"></div>
            <div className="div-data-base"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
