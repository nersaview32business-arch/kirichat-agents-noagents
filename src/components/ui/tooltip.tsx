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
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 z-50 px-6 py-3 bg-white text-[#1b1d23] text-xl rounded-md whitespace-nowrap shadow-lg border-2 border-[#e0e2e7] [font-family:'Inter',Helvetica] font-bold">
          {content}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-white" style={{ filter: 'drop-shadow(-1px 0 0 #e0e2e7)' }} />
        </div>
      )}
    </div>
  );
};
