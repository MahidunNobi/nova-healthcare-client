import React, { ReactNode } from "react";

const Container = ({
  children,
  addClass,
}: {
  children: ReactNode;
  addClass?: string;
}) => {
  return (
    <div className={`px-2 my-24 ${addClass}`}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Container;
