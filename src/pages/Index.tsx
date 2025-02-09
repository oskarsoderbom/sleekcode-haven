
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProblemList from "@/components/ProblemList";
import { useState, useEffect } from "react";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('spreadsheet-bg', !isDark);
    document.body.style.backgroundColor = isDark ? '#0A1929' : '#ffffff';
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 rounded-full"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" />
        )}
      </Button>

      <div className="w-[95%] max-w-[1600px] mx-auto transform transition-all duration-300 hover:scale-[1.01]">
        <div className={`glass-morphism rounded-xl shadow-2xl ${isDark ? 'dark' : 'light'}`}>
          <div className={`min-h-[80vh] rounded-xl overflow-hidden`}>
            <div className={`h-full backdrop-blur-xl ${isDark ? 'bg-black/20' : 'bg-white/60'}`}>
              <ProblemList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
