import React from "react";

const Header = () => {
  return (
    <div className=" mt-[45px] flex justify-between  lg:mt-[71px]">
      <h3
        className=" flex items-center gap-1 font-bold"
        style={{ fontSize: "clamp(1.125rem, 0.8609rem + 1.1268vw, 1.875rem)" }}
      >
        Photography <span className="text-[34px]">/</span>{" "}
        <span className="font-normal text-[#9B9B9B]">Premium Photos</span>
      </h3>
      <div className=" hidden  items-center gap-3 lg:flex">
        <p className="flex items-center gap-2 text-[#9B9B9B]">
          <img
            src="./sortIcon.svg"
            alt="sort icon"
            className="h-[15px] w-[15px]"
          />
          Sort By
        </p>
        <ul>
          <li className="flex items-center gap-2">
            Price
            <img
              src="./arrowDown.svg"
              alt="sort icon"
              className="h-[8px] w-[16px]"
            />
          </li>
          {/* <li>Name</li> */}
        </ul>
      </div>
      <div className="flex  lg:hidden">
        <img src="./filterIcon.svg" alt="filter icon" />
      </div>
    </div>
  );
};

export default Header;
