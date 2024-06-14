"use client";

import useCountries from "@/app/hooks/useCountries";
import useSearchModel from "@/app/hooks/useSearchModel";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModel = useSearchModel();
  const params = useSearchParams();
  const { getByValues } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValues(locationValue as string)?.label;
    }
    return "";
  }, [getByValues, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }
      return `${diff} days`;
    }
    return "";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "";
  }, [guestCount]);

  return (
    <div
      onClick={searchModel.onOpen}
      className="
      border-[1px]
      w-full
      md:w-auto
      py-2
      rounded-full
      shadow-sm
      hover:shadow-md
      transition
      cursor-pointer
    "
    >
      <div
        className="
        flex
        flex-row
        items-center
        justify-between
      "
      >
        <div
          className="
          text-sm
          pl-6
          pr-2
          text-gray-600
          flex
          flex-row
          items-center
          gap-3

        "
        >
          <div className="hidden sm:block">{guestLabel}</div>
          <div
            className="
            p-2
            bg-black
            rounded-full
            text-white
          "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
