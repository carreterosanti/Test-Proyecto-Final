import React from "react";
import AceEditor from "react-ace";

function Editor() {
  const onChange = newValue => {
    console.log("change", newValue);
  };

  return (
    <div>
      <AceEditor width="100%" />
    </div>
  );
}

export default Editor;
