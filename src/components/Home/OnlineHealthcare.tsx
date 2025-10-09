import Image from "next/image";
import Container from "../Container/Container";

const OnlineHealthcare = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
        {/* ----Content---- */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-12 md:leading-16">
            Access convenient online Healthcare with DocTime
          </h1>
          <p className="text-2xl leading-10">
            DocTime offers you the convenience of accessing care from anywhere,
            saving time, and ensuring you to get the attention you need without
            the hassle of traveling to a clinic. Whether it&apos; for routine
            check-ups, follow-ups, or managing ongoing health conditions, online
            consultations provide a flexible and efficient solution. Embrace the
            future of healthcare by exploring our online consultation options
            today.
          </p>
        </div>
        {/* ----Image---- */}
        <div className="lg:min-h-[480px] lg:min-w-[480px]">
          <Image
            src="/home/video-doctor.webp"
            alt="Access convenient online Healthcare with DocTime"
            width={480}
            height={480}
            className="object-cover w-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default OnlineHealthcare;
