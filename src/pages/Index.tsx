
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import CodeEditor from "@/components/CodeEditor";
import ProblemDescription from "@/components/ProblemDescription";

const Index = () => {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-emerald-50 to-slate-50">
      <PanelGroup direction="horizontal" className="min-h-[calc(100vh-2rem)] rounded-xl glass-panel">
        <Panel defaultSize={40} minSize={30}>
          <ProblemDescription />
        </Panel>
        
        <PanelResizeHandle className="panel-handle" />
        
        <Panel minSize={40}>
          <CodeEditor />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Index;
