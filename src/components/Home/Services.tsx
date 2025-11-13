import React from "react";
import Container from "../Container/Container";
import Image from "next/image";

const servicesContent = [
  {
    id: 1,
    imgUrl: "/home/Video_call.webp",
    title: "Live Video Consultation",
    desc: "Get instant video consultation or schedule your appointment",
  },
  {
    id: 2,
    imgUrl: "/home/Medicine.webp",
    title: "Order Medicine",
    desc: "Order easily and get the medicine in 1 hour",
  },
  {
    id: 3,
    imgUrl: "/home/DiagnosticTests.webp",
    title: "Diagnostic Tests",
    desc: "Get instant video consultation or schedule your appointment",
  },
  {
    id: 4,
    imgUrl: "/home/HealthcarePackages.webp",
    title: "Healthcare Packages",
    desc: "Consultations, hospital care, insurance & more",
  },
  {
    id: 5,
    imgUrl: "/home/ItServices.webp",
    title: "Healthcare IT Services",
    desc: "Our expert engineer can help build your health-tech solutions",
  },
  {
    id: 6,
    imgUrl: "/home/CareGlobal.webp",
    title: "CareGlobal",
    desc: "Quality & hassle free healthcare abroad.",
  },
];

const Services = () => {
  return (
    <Container addClass="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-6">
        {servicesContent.map((serv) => (
          <Service
            key={serv.id}
            imgUrl={serv.imgUrl}
            title={serv.title}
            desc={serv.desc}
          />
        ))}
      </div>
    </Container>
  );
};

export default Services;

const Service = ({
  imgUrl,
  title,
  desc,
}: {
  imgUrl: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="p-6 border hover:border-cyan-600 flex flex-col items-center *:text-center rounded-lg">
      <div className="h-[170px]">
        <Image
          src={imgUrl}
          alt={title}
          width={204}
          height={106}
          className="object-cover h-full w-auto"
        />
      </div>
      <h3 className="text-xl font-bold my-3"> {title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
};
