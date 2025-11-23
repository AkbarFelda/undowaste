import React from "react";

function AppLayout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`container mx-auto px-4 lg:px-[66px] lg:py-[31px] ${className}`}
    >
      {children}
    </div>
  );
}

export default AppLayout;
