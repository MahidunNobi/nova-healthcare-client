import { ReactNode } from "react";
import { BsCapsule, BsSpeedometer } from "react-icons/bs";
import {
  FaHandHoldingMedical,
  FaHandsHoldingChild,
  FaUserDoctor,
} from "react-icons/fa6";
import { IoIosMore, IoIosWoman } from "react-icons/io";
import HeadingTwo from "../Common/HeadingTwo";
import Subtitle from "../Common/Subtitle";
import Container from "../Container/Container";

const specialties = [
  {
    id: 1,
    icon: <FaUserDoctor size={40} color="#00b8db" />,
    label: "General Physician",
    des: "Cold, flu, fever, vomiting, infections, headaches or any other ",
  },
  {
    id: 2,
    icon: <FaHandsHoldingChild size={40} color="#00b8db" />,
    label: "Pediatrics",
    des: "Any children's health related issues including physical, behavio...",
  },
  {
    id: 3,
    icon: <IoIosWoman size={40} color="#00b8db" />,
    label: "Gynae & Obs",
    des: "Any women's health related issues including pregnancy, menstruat...",
  },
  {
    id: 4,
    icon: <FaHandHoldingMedical size={40} color="#00b8db" />,
    label: "Dermatology",
    des: "Treatment of diseases related to skin, hair and nails and some c...",
  },
  {
    id: 5,
    icon: <BsCapsule size={40} color="#00b8db" />,
    label: "Internal Medicine",
    des: "Prevention, diagnosis, and treatment of adults across the spectr...",
  },
  {
    id: 6,
    icon: <BsSpeedometer size={40} color="#00b8db" />,
    label: "Endocrinology",
    des: "Treatment of diseases related to problems with hormone.",
  },
  {
    id: 7,
    icon: <IoIosMore size={40} color="#00b8db" />,
    label: "More",
    des: "Explore many more...",
  },
];

const AvailableSpecialists = () => {
  return (
    <div className="bg-gray-200 py-8 my-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6">
            <Subtitle>Available specialties</Subtitle>
            <HeadingTwo> Explore Doctors from 36+ clinical areas </HeadingTwo>
          </div>
          {specialties.map((speciality) => (
            <Speciality
              key={speciality.id}
              icons={speciality.icon}
              label={speciality.label}
              des={speciality.des}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AvailableSpecialists;

const Speciality = ({
  icons,
  label,
  des,
}: {
  icons: ReactNode;
  label: string;
  des: string;
}) => {
  return (
    <div className="flex flex-col items-center space-y-3 *:text-center border hover:border-cyan-400 p-6 rounded-xl bg-white cursor-pointer">
      <div className="p-6">{icons}</div>
      <h4 className="text-xl font-bold"> {label}</h4>
      <span>{des}</span>
    </div>
  );
};
