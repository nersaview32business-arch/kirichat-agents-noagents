import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Tooltip } from "./ui/tooltip";

interface SidebarSeparatorProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SidebarSeparator = ({ isCollapsed, onToggle }: SidebarSeparatorProps): JSX.Element => {
  return (
    <div className="flex w-5 h-full items-center justify-center relative group">
      <Tooltip content={isCollapsed ? "Expand" : "Collapse"}>
        <button
          onClick={onToggle}
          className="absolute z-10 w-6 h-6 bg-white border border-[#e0e2e7] rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRightIcon className="w-4 h-4 text-[#3d4350]" />
          ) : (
            <ChevronLeftIcon className="w-4 h-4 text-[#3d4350]" />
          )}
        </button>
      </Tooltip>
      <div className="w-[3px] h-5 bg-[#d9d9d9] rounded-[33554400px]" />
    </div>
  );
};
