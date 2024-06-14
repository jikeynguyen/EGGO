"use client";

import { GiForestCamp } from "react-icons/gi";
import { MdSportsSoccer } from "react-icons/md";
import { IoTennisball } from "react-icons/io5";
import { GiShuttlecock } from "react-icons/gi";
import { GrSwim } from "react-icons/gr";
import { BiRun } from "react-icons/bi";
import { LuBike } from "react-icons/lu";
import { GrYoga } from "react-icons/gr";
import { FaPeoplePulling } from "react-icons/fa6";
import { GiCampingTent } from "react-icons/gi";
import { GiGreenhouse } from "react-icons/gi";

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Bóng đá",
    icon: MdSportsSoccer,

  },
  {
    label: "Tennis",
    icon: IoTennisball,

  },
  {
    label: "Cầu lông",
    icon: GiShuttlecock,

  },
  {
    label: "Bơi",
    icon: GrSwim,

  },
  {
    label: "Chạy",
    icon: BiRun,

  },
  {
    label: "Yoga",
    icon: GrYoga,


  },

];

const Categories = () => {
  const params = useSearchParams();
  const selectedCategory = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  // If we are not on the main page, we don't want to show the categories
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
                pt-4
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto
            "
      >
        {categories.map((item) => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item.label}
            selected={selectedCategory === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
