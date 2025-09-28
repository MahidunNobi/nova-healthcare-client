import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      Dashboard Layout
      {children}
    </div>
  );
};

export default DashboardLayout;
