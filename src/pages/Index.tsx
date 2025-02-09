
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import CodeEditor from "@/components/CodeEditor";
import ProblemDescription from "@/components/ProblemDescription";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <div className="max-w-[1600px] mx-auto">
        <PanelGroup 
          direction="horizontal" 
          className="min-h-screen"
        >
          <Panel defaultSize={40} minSize={30}>
            <div className="h-full bg-[#1E1E1E] border-r border-white/10">
              <ProblemDescription />
            </div>
          </Panel>
          
          <PanelResizeHandle className="w-1.5 bg-white/[0.02] hover:bg-emerald-500/20 transition-colors" />
          
          <Panel minSize={40}>
            <div className="h-full bg-[#1E1E1E]">
              <CodeEditor />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default Index;
