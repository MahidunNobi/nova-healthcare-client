import React, { ReactNode } from "react";

const HeadingOne = ({
  children,
  addClass,
}: {
  children: ReactNode;
  addClass?: string;
}) => {
  return (
    <h1
      className={`text-4xl md:text-5xl font-extrabold leading-12 md:leading-16 ${addClass}`}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
