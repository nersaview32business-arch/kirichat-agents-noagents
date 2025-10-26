import { Plus as PlusIcon } from "lucide-react";
import React, { useState, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Topbar } from "../../components/Topbar";
import { Sidebar } from "../../components/Sidebar";
import { SidebarSeparator } from "../../components/SidebarSeparator";

export const FrameUtamaHalaman = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isManualMode, setIsManualMode] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (isManualMode) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsCollapsed(false);
  };

  const handleMouseLeave = () => {
    if (isManualMode) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsCollapsed(true);
  };

  const handleToggle = () => {
    if (isManualMode && !isCollapsed) {
      setIsManualMode(false);
      setIsCollapsed(true);
    } else {
      setIsManualMode(true);
      setIsCollapsed(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Topbar />

      <div className="flex flex-1 overflow-hidden relative">
        <div className="fixed left-0 top-[64px] bottom-0 flex z-10">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Sidebar isCollapsed={isCollapsed} />
          </div>
          <SidebarSeparator
            isCollapsed={isCollapsed}
            onToggle={handleToggle}
          />
        </div>

        <main className="flex flex-col flex-1 overflow-hidden ml-[60px]">
          <div className="flex flex-col p-5 bg-white">
            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[20px] tracking-[0] leading-[27px]">
              Agents
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[14px] tracking-[0.26px] leading-[20px]">
              Here you can see agents that you build
            </p>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 bg-white">
            <div className="flex flex-col items-center gap-[18px] w-full max-w-[353px]">
              <div
                className="flex flex-col w-full h-[124px] items-start gap-2 px-[77px] py-[26px] rounded-[16px] overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url(/foto-no-agent.png)" }}
              >
                <div className="relative w-[204px] h-[71px]">
                  <div className="absolute w-[77.57%] h-[76.28%] top-[23.72%] left-[9.96%] bg-[#ffffffcc] rounded-[6px] shadow-[0px_1px_9px_1px_#6363631f]" />
                  <div className="absolute w-[90.08%] h-[76.28%] top-[11.86%] left-[3.71%] bg-[#ffffffcc] rounded-[6px] shadow-[0px_1px_9px_1px_#6363631f]" />
                  <div className="absolute w-[97.50%] h-[76.28%] top-0 left-0 bg-[#ffffffd9] rounded-[6px] shadow-[0px_1px_9px_1px_#6363631f]" />
                  <div className="absolute w-[25.06%] h-[12.28%] top-[15.71%] left-[67.31%] [font-family:'Inter',Helvetica] font-normal text-[#bcbcbc] text-[5px] text-right tracking-[0] leading-[normal]">
                    42 min ago
                  </div>
                  <div className="absolute w-[32.96%] h-[11.98%] top-[16.17%] left-[22.82%] [font-family:'Urbanist',Helvetica] font-semibold text-black text-[8.5px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Kirichat
                  </div>
                  <div className="absolute w-[58.06%] h-[25.54%] top-[33.78%] left-[22.80%] [font-family:'Urbanist',Helvetica] font-semibold text-[#838383] text-[6px] tracking-[0] leading-[normal]">
                    Hi im your AI customer service , what can i help you with?
                  </div>
                  <img
                    className="absolute w-[15.14%] h-[46.56%] top-[14.86%] left-[4.04%] object-cover"
                    alt="Rectangle"
                    src="/rectangle-28.svg"
                  />
                </div>
              </div>

              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#3d4350] text-[20px] text-center tracking-[0.26px] leading-5 whitespace-nowrap">
                No Agents yet..
              </h2>

              <p className="[font-family:'Inter',Helvetica] font-normal text-[#3d4350] text-[14px] text-center tracking-[0.26px] leading-5">
                Build your first AI agents to answering <br />
                customer question, book meetings, and more.
              </p>

              <Button className="flex items-center justify-center gap-2 w-[155px] h-[34px] bg-[#316afe] hover:bg-[#2557d9] rounded-[10px] border border-solid shadow-[inset_0px_2px_8px_#ffffff8f,inset_-2px_-2px_12px_#ffffff8f]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-[12px] tracking-[0.26px] leading-[17px]">
                  Create new agent
                </span>
                <PlusIcon className="w-[17px] h-[17px]" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
