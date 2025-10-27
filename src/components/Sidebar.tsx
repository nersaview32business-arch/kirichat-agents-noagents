import {
  BarChart3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const navigationItems = [
  { icon: "/agents-icon.svg", label: "Agents", active: true, isCustomIcon: true },
  { icon: "/usage-icon.svg", label: "Usage", active: false, isCustomIcon: true },
  { icon: "/chat-log-icon.svg", label: "Chat Log", active: false, isCustomIcon: true },
  {
    icon: SettingsIcon,
    label: "Framework Settings",
    active: false,
    hasSubmenu: true,
  },
];

const submenuItems = [
  { label: "Generals", active: false },
  { label: "Team", active: false },
  { label: "Billings", active: false },
  { label: "Plan", active: false },
];

interface SidebarProps {
  isCollapsed: boolean;
}

export const Sidebar = ({ isCollapsed }: SidebarProps): JSX.Element => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <aside
      className={`flex flex-col h-full bg-white border-r border-[#e0e2e7] transition-[width] duration-300 ease-in-out overflow-hidden relative ${
        isCollapsed ? "w-[60px]" : "w-[230px]"
      }`}
    >
      <div className="py-4">
        <nav className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 mx-3">
            {navigationItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="relative h-[36px]">
                  <div className="absolute left-3 top-0 h-[36px] flex items-center z-10">
                    {item.isCustomIcon ? (
                      <img src={item.icon as string} alt="" className="w-[17px] h-[17px]" />
                    ) : (
                      <item.icon className="w-[17px] h-[17px]" />
                    )}
                  </div>

                  {!isCollapsed && (
                    <Button
                      variant="ghost"
                      className={`group absolute left-0 top-0 w-full h-[36px] rounded-[10px] justify-start pl-[38px] pr-3 py-1 ${
                        item.active ? "bg-white border border-[#e5e7eb] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" : ""
                      }`}
                      onClick={() => {
                        if (item.hasSubmenu) {
                          setIsSettingsOpen(!isSettingsOpen);
                        }
                      }}
                    >
                      <span
                        className={`flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-[14px] tracking-[0] leading-5 whitespace-nowrap transition-colors duration-200 ${
                          item.active ? "text-[#1b1d23]" : "text-[#3d4350] group-hover:text-[#1b1d23]"
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.hasSubmenu && (
                        <ChevronDownIcon
                          className={`w-[16px] h-[16px] transition-transform duration-200 ${
                            isSettingsOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Button>
                  )}
                </div>

              {item.hasSubmenu && !isCollapsed && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isSettingsOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex gap-[19px] pt-1 pl-[18px]">
                    <div className="w-0.5 bg-[#d9d9d9]" />
                    <div className="flex flex-col gap-[2px] flex-1">
                      {submenuItems.map((subitem, subindex) => (
                        <Button
                          key={subindex}
                          variant="ghost"
                          className="group w-full h-auto justify-start px-2.5 py-1.5 rounded-lg hover:bg-transparent"
                        >
                          <span className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[14px] tracking-[0.17px] leading-5 transition-colors duration-200 group-hover:text-[#1b1d23]">
                            {subitem.label}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
      </div>
    </aside>
  );
};
