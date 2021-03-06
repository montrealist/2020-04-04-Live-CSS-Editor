import React, { useState } from "react";
import "./App.css";
import SampleMarkup from "./SampleMarkup";

import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/mode-css";

// import "ace-builds/webpack-resolver";
require("ace-builds/src-noconflict/mode-css");
require("ace-builds/src-noconflict/theme-github");

const code = `.sample-markup {
  font-size: 1em;
  color: purple;
}

h1 {
  color: green;
}

`;

const sheet = document.createElement("style");
sheet.innerHTML = code;
document.body.appendChild(sheet);

function App() {
    const [style, setStyle] = useState(code);
    function onChange(newValue) {
        setStyle(newValue);
        sheet.innerHTML = newValue;
    }
    return (
        <div className="app">
            <div className="editor">
                <h1 className="main-heading">CSS Editor:</h1>
                <AceEditor
                    mode="css"
                    width="100%"
                    height="100%"
                    value={style}
                    theme="github"
                    showPrintMargin={false}
                    onChange={onChange}
                    name="ace-editor"
                    setOptions={{ showLineNumbers: true }}
                    editorProps={{ $blockScrolling: false }}
                />
            </div>
            <div className="sample-markup">
                <h1 className="main-heading">Some sample HTML:</h1>
                <SampleMarkup></SampleMarkup>
            </div>
        </div>
    );
}

export default App;
