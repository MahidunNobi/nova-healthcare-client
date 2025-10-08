import React, { ReactNode } from "react";
import Container from "../Container/Container";
import { FaClock, FaDownload, FaUserDoctor } from "react-icons/fa6";
import { IconType } from "react-icons";
import { TbHeartRateMonitor } from "react-icons/tb";
import { RiUserStarFill } from "react-icons/ri";

const statsData = [
  {
    id: 1,
    icon: <FaUserDoctor size={40} color="#006e8b" />,
    label: "1700+",
    des: "BMDC verified doctors",
  },
  {
    id: 2,
    icon: <FaClock size={40} color="#006e8b" />,
    label: "10 Minutes",
    des: "Average waiting time",
  },
  {
    id: 3,
    icon: <TbHeartRateMonitor size={40} color="#006e8b" />,
    label: "700K+",
    des: "People have trusted us with their health",
  },
  {
    id: 4,
    icon: <RiUserStarFill size={40} color="#006e8b" />,
    label: "95%",
    des: "Users gave 5 star rating",
  },
  {
    id: 5,
    icon: <FaDownload size={40} color="#006e8b" />,
    label: "1+ Million",
    des: "App download on Playstore",
  },
];

const Stats = () => {
  return (
    <div className="my-6 py-16 bg-cyan-100/40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {statsData.map((stat) => (
            <State
              key={stat.id}
              icons={stat.icon}
              label={stat.label}
              des={stat.des}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Stats;

const State = ({
  icons,
  label,
  des,
}: {
  icons: ReactNode;
  label: string;
  des: string;
}) => {
  return (
    <div className="flex flex-col items-center space-y-3 *:text-center">
      <div className="p-6 rounded-full bg-white inline-block">{icons}</div>
      <h4 className="text-xl font-bold"> {label}</h4>
      <span>{des}</span>
    </div>
  );
};
