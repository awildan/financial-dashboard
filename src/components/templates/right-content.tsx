import React from "react";

const RightContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen h-full sticky top-0 bg-background text-foreground p-6 gap-5 w-1/3">
      {children}
    </div>
  );
};

export default RightContent;
