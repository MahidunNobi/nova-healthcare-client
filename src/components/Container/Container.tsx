import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-2">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Container;
