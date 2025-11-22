import React from 'react';

function AppLayout({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`container mx-auto lg:px-[66px] lg:py-[31px] p-4 ${className}`}>
      {children}
    </div>
  );
}

export default AppLayout;