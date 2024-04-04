"use client";

import {

  GiForestCamp

} from "react-icons/gi";
import { MdSportsSoccer } from "react-icons/md";
import { IoTennisball } from "react-icons/io5";
import { GiShuttlecock } from "react-icons/gi";
import { GrSwim } from "react-icons/gr";
import { BiRun } from "react-icons/bi";
import { LuBike } from "react-icons/lu";
import { GrYoga } from "react-icons/gr";
import { FaPeoplePulling } from "react-icons/fa6";
import { GiMountainClimbing } from "react-icons/gi";

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Soccer",
    icon: MdSportsSoccer,
    description: "This property is close to the Soccer!",
  },
  {
    label: "Tennis",
    icon: IoTennisball,
    description: "This property is Tennis!",
  },
  {
    label: "Badminton",
    icon: GiShuttlecock,
    description: "This property is Badminton!",
  },
  {
    label: "Swim",
    icon: GrSwim,
    description: "This property is Swim!",
  },
  {
    label: "Run",
    icon: BiRun,
    description: "This is property has a beautiful Run!",
  },
  {
    label: "Bike",
    icon: LuBike,
    description: "This property is on an Bike!",
  },
  {
    label: "Climb",
    icon: GiMountainClimbing,
    description: "This property is near a Climb!",
  },
  {
    label: "Yoga",
    icon: GrYoga,
    description: "This property has skiing Yoga!",
  },

  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Anything with You",
    icon: FaPeoplePulling,
    description: "This property makes new friend!",
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
