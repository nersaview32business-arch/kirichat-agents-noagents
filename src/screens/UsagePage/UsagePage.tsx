import React, { useState, useRef } from "react";
import { Topbar } from "../../components/Topbar";
import { Sidebar } from "../../components/Sidebar";
import { SidebarSeparator } from "../../components/SidebarSeparator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { BarChart3Icon, TrendingUpIcon, UsersIcon, MessageSquareIcon } from "lucide-react";

export const UsagePage = (): JSX.Element => {
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

  const usageStats = [
    {
      icon: MessageSquareIcon,
      label: "Total Messages",
      value: "12,450",
      change: "+12.5%",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: UsersIcon,
      label: "Active Users",
      value: "3,280",
      change: "+8.2%",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: TrendingUpIcon,
      label: "API Calls",
      value: "48,392",
      change: "+15.3%",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: BarChart3Icon,
      label: "Success Rate",
      value: "98.5%",
      change: "+2.1%",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const recentActivity = [
    { agent: "Customer Support Bot", messages: 1240, timestamp: "2 hours ago" },
    { agent: "Sales Assistant", messages: 856, timestamp: "5 hours ago" },
    { agent: "Technical Support", messages: 632, timestamp: "1 day ago" },
    { agent: "Meeting Scheduler", messages: 428, timestamp: "1 day ago" },
  ];

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

        <main className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${isManualMode && !isCollapsed ? 'ml-[230px]' : 'ml-[60px]'}`}>
          <div className="flex flex-col p-5 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[20px] tracking-[0] leading-[27px]">
                  Usage Analytics
                </h1>
                <p className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[14px] tracking-[0.26px] leading-[20px]">
                  Monitor your AI agents performance and activity
                </p>
              </div>
              <Select defaultValue="7days">
                <SelectTrigger className="w-[160px] h-[34px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="all">All time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {usageStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 bg-white rounded-[16px] border border-[#e0e2e7] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-[10px] ${stat.bgColor}`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-green-600 text-[12px]">
                      {stat.change}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[12px] tracking-[0.26px]">
                      {stat.label}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#1b1d23] text-[24px] tracking-[0]">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col p-5 bg-white rounded-[16px] border border-[#e0e2e7] shadow-sm">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[16px] mb-4">
                  Recent Activity
                </h3>
                <div className="flex flex-col gap-3">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-[#f9fafb] rounded-[10px] hover:bg-[#f3f4f6] transition-colors"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#1b1d23] text-[14px]">
                          {activity.agent}
                        </span>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#3d4350] text-[12px]">
                          {activity.messages} messages
                        </span>
                      </div>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#9ca3af] text-[12px]">
                        {activity.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col p-5 bg-white rounded-[16px] border border-[#e0e2e7] shadow-sm">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[16px] mb-4">
                  Usage Overview
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[14px]">
                        API Quota
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[14px]">
                        48,392 / 100,000
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#e0e2e7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#316afe] rounded-full" style={{ width: '48%' }} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[14px]">
                        Message Quota
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[14px]">
                        12,450 / 50,000
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#e0e2e7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#10b981] rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[14px]">
                        Storage Used
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[14px]">
                        2.4 GB / 10 GB
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#e0e2e7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: '24%' }} />
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-[#f0f9ff] rounded-[10px] border border-[#bfdbfe]">
                    <p className="[font-family:'Inter',Helvetica] font-medium text-[#1e40af] text-[12px] leading-[18px]">
                      You're on the Pro plan. Upgrade to Enterprise for unlimited usage and priority support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
