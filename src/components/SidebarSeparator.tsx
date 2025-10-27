'use client';

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Tooltip } from "./ui/tooltip";
import { useState } from "react";

interface SidebarSeparatorProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SidebarSeparator = ({ isCollapsed, onToggle }: SidebarSeparatorProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsHovered(false);
    onToggle();
  };

  return (
    <div
      className="flex w-5 h-full items-center justify-center relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`w-[3px] h-5 bg-[#d9d9d9] rounded-[33554400px] transition-opacity duration-200 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />

      <Tooltip content={isCollapsed ? "Expand" : "Collapse"}>
        <div className={`absolute z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-200 -top-2 -left-2 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>

          {isCollapsed ? (
            <ChevronRightIcon className="w-[22px] h-[22px] text-[#d4d4d8]" strokeWidth={2.5} />
          ) : (
            <ChevronLeftIcon className="w-[22px] h-[22px] text-[#d4d4d8]" strokeWidth={2.5} />
          )}
        </div>
      </Tooltip>
    </div>
  );
};
