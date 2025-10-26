import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Tooltip } from "./ui/tooltip";
import { useState } from "react";

interface SidebarSeparatorProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SidebarSeparator = ({ isCollapsed, onToggle }: SidebarSeparatorProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex w-5 h-full items-center justify-center relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      <div className={`w-[3px] h-5 bg-[#d9d9d9] rounded-[33554400px] transition-opacity duration-200 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />

      <Tooltip content={isCollapsed ? "Expand" : "Collapse"}>
        <div className={`absolute z-10 w-5 h-5 bg-white rounded-full flex items-center justify-center transition-all duration-200 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          {isCollapsed ? (
            <ChevronRightIcon className="w-[14px] h-[14px] text-[#9ca3af]" strokeWidth={2} />
          ) : (
            <ChevronLeftIcon className="w-[14px] h-[14px] text-[#9ca3af]" strokeWidth={2} />
          )}
        </div>
      </Tooltip>
    </div>
  );
};
