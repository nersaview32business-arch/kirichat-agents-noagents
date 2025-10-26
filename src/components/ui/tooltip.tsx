import * as React from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export const Tooltip = ({ children, content }: TooltipProps): JSX.Element => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 px-3 py-1.5 bg-[#1b1d23] text-white text-xs rounded-md whitespace-nowrap shadow-lg [font-family:'Inter',Helvetica] font-medium">
          {content}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1b1d23]" />
        </div>
      )}
    </div>
  );
};
