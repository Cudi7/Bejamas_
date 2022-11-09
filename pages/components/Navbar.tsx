import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useProducts } from "../../src/contexts/products.context";

const Navbar = () => {
  const { handleClearCartItems, cartItems } = useProducts();
  const [currentCartItems, setCurrentCartItems] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (cartItems.length) {
      setCurrentCartItems(cartItems.length);
      setIsOpen(true);
    } else if (!cartItems.length) {
      setIsOpen(false);
      setCurrentCartItems(0);
    }
  }, [cartItems]);

  const handleClose = (): void => setIsOpen(false);
  const handleOpen = (): void => {
    if (cartItems.length) {
      setIsOpen(true);
    }
  };

  return (
    <nav className=" flex h-[100%] items-center  ">
      <ul className="flex w-[100%] items-center justify-between">
        <li>
          <img src="./logo.svg" alt="Company Logo" />
        </li>

        <li className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" h-[32px] w-[32px] lg:h-[54px] lg:w-[54px]"
            onClick={handleOpen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {currentCartItems > 0 ? (
            <span className=" absolute right-0 -bottom-1 ml-2 rounded-sm bg-slate-900/90 px-1 text-xs  font-medium text-white lg:py-0.5 lg:px-2 lg:leading-5 ">
              {currentCartItems}
            </span>
          ) : null}
          <span
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute right-0 z-10 max-h-[400px] flex-col overflow-y-scroll border border-slate-200 bg-white p-4 lg:max-h-[30vw] lg:w-[390px]`}
          >
            <img
              className="ml-auto"
              src="./x.svg"
              alt="Close Icon"
              onClick={handleClose}
            />
            {cartItems.map((el, index) => (
              <>
                <div className="my-5  flex justify-between gap-5">
                  <div>
                    <h5 className="text-[20px] font-bold">
                      {el.name.split(" ")[0]}
                    </h5>
                    <p className="text-[29px] text-[#656565]">${el.price}</p>
                  </div>
                  <Image
                    src={el.image.src}
                    alt={el.image.alt}
                    height={86}
                    width={149}
                    className="max-h-[86px] max-w-[149px]"
                  />
                </div>
                {index < cartItems.length - 1 ? (
                  <div className="w-[100%] border border-slate-100"></div>
                ) : null}
              </>
            ))}
            <button
              onClick={handleClearCartItems}
              className="flex h-[55px] w-[100%] items-center justify-center border-2 border-black  text-[1.438rem]"
            >
              Clear
            </button>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
