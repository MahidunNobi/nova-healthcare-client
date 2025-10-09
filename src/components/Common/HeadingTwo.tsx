import React from "react";

const HeadingTwo = ({ children }: { children: string }) => {
  return (
    <h2 className="text-2xl md:text-4xl font-extrabold leading-8 md:leading-12">
      {children}
    </h2>
  );
};

export default HeadingTwo;
