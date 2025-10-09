import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import Subtitle from "../Common/Subtitle";

const WhyNova = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:items-center">
        {/* ----Image---- */}
        <div>
          <Image
            src="/home/Why_DocTime.webp"
            alt="Why Nova Health care"
            width={738}
            height={600}
            className="object-cover w-auto"
          />
        </div>
        {/* ----Image---- */}
        <div className="flex flex-col gap-6">
          <Subtitle>Why Nova health care?</Subtitle>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-12 md:leading-16">
            Bangladesh&apos;s leading healthcare app for online doctor
            consultation
          </h1>
          <ul className="list-disc text-2xl  leading-10 space-y-6 ml-6">
            <li>
              Access any GP or specialist doctor you need at anytime from
              anywhere.
            </li>
            <li>
              Access to online prescriptions, medicine delivery, and diagnostic
              tests.
            </li>
            <li>
              Easy subscription packages to protect you and your loved
              one&apos;s health and wellbeing.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default WhyNova;
