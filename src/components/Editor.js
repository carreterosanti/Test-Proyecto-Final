import React from "react";
import AceEditor from "react-ace";

function Editor() {
  const onChange = newValue => {
    console.log("change", newValue);
  };

  return (
    <div>
      <AceEditor />
    </div>
  );
}

export default Editor;
