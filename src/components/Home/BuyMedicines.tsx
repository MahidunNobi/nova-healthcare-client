import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import HeadingOne from "../Common/HeadingOne";
import { Button } from "../ui/button";

const BuyMedicines = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="h-[700px]">
            <Image
              src="/home/Buy_Medicines.webp"
              alt="Buy Medicines online from home"
              width={911}
              height={987}
              className="object-cover h-full w-auto"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-6">
            <HeadingOne>
              Buy Medicines online <br /> from home
            </HeadingOne>
            <p className="text-2xl leading-10">
              Authentic medicines with discounts & free home delivery within
              Dhaka city
            </p>
            <span className="text-gray-400"> *conditions apply </span>
            <div>
              <Button className="block"> Buy Online</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuyMedicines;
