import React, { useState } from "react";
import FilterSelector from "./FilterSelector";
import FilterSelectorMobile from "./FilterSelectorMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCategories = () => {};

  const handleOpen = (): void => {
    if (!isOpen) setIsOpen(true);
  };

  const handleClose = (): void => setIsOpen(false);

  return (
    <div className=" mt-[45px] flex justify-between  lg:mt-[71px]">
      <h3
        className=" flex items-center gap-1 font-bold"
        style={{ fontSize: "clamp(1.125rem, 0.8609rem + 1.1268vw, 1.875rem)" }}
      >
        Photography <span className="text-[34px]">/</span>{" "}
        <span className="font-normal text-[#9B9B9B]">Premium Photos</span>
      </h3>
      <div className=" hidden  items-center gap-3 text-[22px] lg:flex">
        <p className="flex items-center gap-2 text-[#9B9B9B]">
          <img
            src="./sortIcon.svg"
            alt="sort icon"
            className="h-[15px] w-[15px]"
          />
          Sort By
        </p>
        <FilterSelector />
        {/* <ul>
          <li className="flex items-center gap-2">
            Price
            <img
              src="./arrowDown.svg"
              alt="sort icon"
              className="h-[8px] w-[16px]"
            />
          </li>
        </ul> */}
      </div>
      <FilterSelectorMobile />
    </div>
  );
};

export default Header;
