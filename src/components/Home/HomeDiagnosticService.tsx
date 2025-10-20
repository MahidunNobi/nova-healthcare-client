import React from "react";
import Container from "../Container/Container";
import Subtitle from "../Common/Subtitle";
import HeadingOne from "../Common/HeadingOne";
import { FaHandPeace } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import Image from "next/image";
import { Button } from "../ui/button";

const HomeDiagnosticService = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-12">
        {/* Content */}
        <div className="space-y-10">
          <Subtitle> Home Diagnostic Service </Subtitle>
          <HeadingOne> Sample collection at your Doorstep </HeadingOne>
          <p className="text-2xl leading-10">
            {" "}
            Making healthcare easily accessible anytime, anywhere.{" "}
          </p>
          <ul className="space-y-6">
            <li className="flex items-center gap-6">
              <div className="bg-gray-200 rounded-xl p-2 inline-block">
                <FaHandPeace size={28} />
              </div>
              <span>Faster and convenient tests booking</span>
            </li>
            <li className="flex items-center gap-6">
              <div className="bg-gray-200 rounded-xl p-2 inline-block">
                <AiFillSafetyCertificate size={28} />
              </div>
              <span>
                Certified professionals will collect sample from home/office
              </span>
            </li>
            <li className="flex items-center gap-6">
              <div className="bg-gray-200 rounded-xl p-2 inline-block">
                <HiDocumentReport size={28} />
              </div>
              <span>Get report at DocTime app within 24 hours</span>
            </li>
          </ul>
          <Button> Book Test</Button>
        </div>
        {/* Image */}
        <div className=" h-[498px]">
          <Image
            src="/home/Home_Diagnostic_Service.webp"
            alt="Access convenient online Healthcare with DocTime"
            width={720}
            height={772}
            className="object-cover h-full w-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default HomeDiagnosticService;
