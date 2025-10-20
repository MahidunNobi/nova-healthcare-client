import React, { ReactNode } from "react";

const Container = ({
  children,
  addClass,
}: {
  children: ReactNode;
  addClass?: string;
}) => {
  return (
    <div className={`px-2 md:my-28 ${addClass}`}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Container;
