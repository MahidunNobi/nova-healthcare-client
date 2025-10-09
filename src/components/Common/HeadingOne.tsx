import React from "react";

const HeadingOne = ({ children }: { children: string }) => {
  return (
    <h1 className="text-4xl md:text-5xl font-extrabold leading-12 md:leading-16">
      {children}
    </h1>
  );
};

export default HeadingOne;
