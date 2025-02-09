
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import CodeEditor from "@/components/CodeEditor";
import ProblemDescription from "@/components/ProblemDescription";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A1929] flex items-center justify-center p-8">
      <div className="w-[95%] max-w-[1600px] mx-auto transform transition-all duration-300 hover:scale-[1.01]">
        <div className="glass-morphism rounded-xl shadow-2xl">
          <PanelGroup 
            direction="horizontal" 
            className="min-h-[80vh] rounded-xl overflow-hidden"
          >
            <Panel defaultSize={40} minSize={30}>
              <div className="h-full bg-black/20 backdrop-blur-xl">
                <ProblemDescription />
              </div>
            </Panel>
            
            <PanelResizeHandle className="w-1.5 bg-white/[0.02] hover:bg-emerald-500/20 transition-colors" />
            
            <Panel minSize={40}>
              <div className="h-full bg-black/20 backdrop-blur-xl">
                <CodeEditor />
              </div>
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </div>
  );
};

export default Index;
