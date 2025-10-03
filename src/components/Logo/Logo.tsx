import Image from "next/image";
import React from "react";

const Logo = ({ addClass }: { addClass?: string }) => {
  return (
    <div className={`relative h-[60px] ${addClass}`}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={406}
        height={130}
        className="object-cover h-full w-auto"
        priority // optional: loads image immediately if it's above the fold
      />
    </div>
  );
};

export default Logo;
