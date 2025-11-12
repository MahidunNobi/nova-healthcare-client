import React from "react";
import Container from "../Container/Container";
import HeadingOne from "../Common/HeadingOne";
import Image from "next/image";

const partnersName = [
  {
    id: 1,
    source: "/home/partner_1.jpg",
    hei: 235,
    wei: 321,
  },
  {
    id: 2,
    source: "/home/partner_2.jpg",
    hei: 168,
    wei: 300,
  },
  {
    id: 3,
    source: "/home/partner_3.jpg",
    hei: 400,
    wei: 400,
  },
  {
    id: 4,
    source: "/home/partner_4.jpg",
    hei: 685,
    wei: 386,
  },
  {
    id: 5,
    source: "/home/partner_5.jpg",
    hei: 625,
    wei: 625,
  },
];

const Partners = () => {
  return (
    <div className="border-t">
      <Container>
        <HeadingOne addClass="text-center mb-12">
          Our Hospital Partners
        </HeadingOne>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
          {partnersName.map((part, i) => (
            <div
              key={part.id}
              className={`h-[98px] px-6 ${
                (i + 1) % 2 == 0 ? "lg:border-x" : ""
              }`}
            >
              <Image
                src={part.source}
                alt="Access convenient online Healthcare with DocTime"
                width={part.wei}
                height={part.hei}
                className="object-cover h-full w-auto"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
