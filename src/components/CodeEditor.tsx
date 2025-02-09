
import Editor from "@monaco-editor/react";
import { useState } from "react";

const defaultCode = `function solution(input) {
  // Write your code here
  
  return;
}`;

export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="editor-container">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-light"
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}
