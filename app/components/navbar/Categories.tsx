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
    description: "Chúc bạn có những trải nghiệm Bóng Đá trọn vẹn nhất!",
  },
  {
    label: "Tennis",
    icon: IoTennisball,
    description: "Chúc bạn có những trải nghiệm Tennis trọn vẹn nhất!",
  },
  {
    label: "Cầu lông",
    icon: GiShuttlecock,
    description: "Chúc bạn có những trải nghiệm Cầu lông trọn vẹn nhất!",
  },
  {
    label: "Bơi",
    icon: GrSwim,
    description: "Chúc bạn có những trải nghiệm bơi lội trọn vẹn!",
  },
  {
    label: "Chạy",
    icon: BiRun,
    description: "Hãy chinh phục những cung đường phía trước!",
  },
  {
    label: "Yoga",
    icon: GrYoga,
    description:
      "Chúc bạn có những giây phút hoà mình với Yoga trọn vẹn nhất!!",
  },
  {
    label: "Nông nghiệp xanh",
    icon: GiGreenhouse,
    description: "Chúc bạn có những trải nghiệm Nông nghiệp xanh thật kì thú!",
  },

  {
    label: "Cắm trại",
    icon: GiForestCamp,
    description: "Chúc bạn có những chuyến đi thật trọn!",
  },
  {
    label: "Kết nối 4 phương",
    icon: FaPeoplePulling,
    description: "Nơi đâu cũng được chỉ cần có nhau!",
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
