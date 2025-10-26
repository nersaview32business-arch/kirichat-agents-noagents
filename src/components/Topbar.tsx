import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Topbar = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between w-full h-[60px] px-4 py-2 bg-white border-b border-[#e0e2e7]">
      <div className="flex items-center gap-[42px]">
        <div className="flex items-center gap-3">
          <img
            className="w-[30px] h-[30px]"
            alt="Symbol kirichat"
            src="/symbol-kirichat.svg"
          />
          <div className="[font-family:'Urbanist',Helvetica] font-bold text-[#1b1d23] text-[27px] tracking-[-0.27px] leading-[40px] whitespace-nowrap">
            Kirichat
          </div>
          <Badge
            variant="outline"
            className="h-6 px-1.5 py-0.5 bg-white rounded-lg border-[#e0e2e7] shadow-innere-shadow-gray-large"
          >
            <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#3d4350] text-sm tracking-[0.17px]">
              Pro
            </span>
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col justify-center w-[196px] h-[34px] px-3 py-1 bg-white rounded-[10px] border border-[#e0e2e7]">
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#3d4350] text-[10px] tracking-[0] leading-[13px] truncate">
              Kirichat Framework Nama
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-[17px] w-[17px] p-0.5 rounded-lg"
          >
            <img className="w-[14px] h-[14px]" alt="Component" src="/component-1.svg" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img className="w-auto h-[34.5px]" alt="Button group" src="/button-group.svg" />
        <Avatar className="w-[34.5px] h-[34.5px]">
          <AvatarImage src="/ellipse-2082.png" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
