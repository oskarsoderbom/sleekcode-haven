
import Editor from "@monaco-editor/react";
import { useState } from "react";

const defaultCode = `function solution(nums, target) {
  // Write your solution here
  
  return [];
}`;

export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="h-full">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 16, bottom: 16 },
          fontFamily: "JetBrains Mono, monospace"
        }}
      />
    </div>
  );
}
