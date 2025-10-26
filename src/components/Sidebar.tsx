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
  { label: "Team", active: true },
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
          <div className="relative h-[36px] mx-5">
            <div className="absolute left-[2px] top-0 h-[36px] flex items-center">
              <img src="/dashboard-icon.svg" alt="" className="w-[17px] h-[17px]" />
            </div>
            {!isCollapsed && (
              <div className="pl-[31px] h-[36px] flex items-center">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[14px] tracking-[0.17px] leading-5">
                  Dashboard
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 mx-5">
            {navigationItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="relative h-[36px]">
                  <div className="absolute left-[2px] top-0 h-[36px] flex items-center z-10">
                    {item.isCustomIcon ? (
                      <img src={item.icon as string} alt="" className="w-[17px] h-[17px]" />
                    ) : (
                      <item.icon className="w-[17px] h-[17px]" />
                    )}
                  </div>

                  {!isCollapsed && (
                    <Button
                      variant="ghost"
                      className={`absolute left-0 top-0 w-full h-[36px] rounded-[8px] justify-start pl-[31px] pr-2.5 py-1 ${
                        item.active ? "bg-white border border-[#E4E4E7] shadow-none" : ""
                      }`}
                      style={item.active ? { borderWidth: '1px' } : undefined}
                      onClick={() => {
                        if (item.hasSubmenu) {
                          setIsSettingsOpen(!isSettingsOpen);
                        }
                      }}
                    >
                      <span
                        className={`flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-[14px] tracking-[0.17px] leading-5 whitespace-nowrap ${
                          item.active ? "text-[#1b1d23]" : "text-[#3d4350]"
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
                  <div className="flex gap-[19px] pt-1">
                    <div className="w-0.5 bg-[#d9d9d9] ml-[12px]" />
                    <div className="flex flex-col gap-[2px] flex-1">
                      {submenuItems.map((subitem, subindex) => (
                        <Button
                          key={subindex}
                          variant="ghost"
                          className={`w-full h-auto justify-start px-2.5 py-1.5 rounded-lg ${
                            subitem.active ? "bg-[#f7f8f9]" : ""
                          }`}
                        >
                          <span className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[14px] tracking-[0.17px] leading-5">
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
