
import Editor from "@monaco-editor/react";
import { useState } from "react";

const defaultCode = `function twoSum(nums, target) {
  return // Write your solution in one line
}`; 

export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="h-full flex items-center">
      <Editor
        height="120px"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          lineNumbers: "on",
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 8, bottom: 8 },
          fontFamily: "JetBrains Mono, monospace",
          lineHeight: 24,
          scrollbar: {
            vertical: 'hidden',
            horizontal: 'hidden'
          },
          lineDecorationsWidth: 0,
          glyphMargin: false,
          folding: false,
          renderLineHighlight: 'all',
          contextmenu: false,
          cursorStyle: 'line',
          cursorWidth: 2,
          wordWrap: 'on'
        }}
      />
    </div>
  );
}
