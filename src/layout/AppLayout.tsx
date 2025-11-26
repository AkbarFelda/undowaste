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
      className={`container  ${className}`}
    >
      {children}
    </div>
  );
}

export default AppLayout;
