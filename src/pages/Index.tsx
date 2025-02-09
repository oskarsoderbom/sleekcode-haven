
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import CodeEditor from "@/components/CodeEditor";
import ProblemDescription from "@/components/ProblemDescription";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A1929]">
      <div className="max-w-[1600px] mx-auto p-6">
        <PanelGroup 
          direction="horizontal" 
          className="min-h-[calc(100vh-3rem)] rounded-xl overflow-hidden border border-white/10"
        >
          <Panel defaultSize={40} minSize={30}>
            <div className="h-full bg-white/[0.02] backdrop-blur-xl">
              <ProblemDescription />
            </div>
          </Panel>
          
          <PanelResizeHandle className="w-1.5 bg-white/[0.02] hover:bg-emerald-500/20 transition-colors" />
          
          <Panel minSize={40}>
            <div className="h-full bg-white/[0.02] backdrop-blur-xl">
              <CodeEditor />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default Index;
