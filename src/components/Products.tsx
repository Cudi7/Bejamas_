import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DataEntity } from "../interfaces/product.interface";
import Pagination from "./Pagination";
import { fetchNewPage } from "../helpers/products.api";
import { useProducts } from "../contexts/products.context";

const parseNewPage = (pageNumber: number): number => {
  if (pageNumber === 0) return 9;
  if (pageNumber === 10) return 1;
  return pageNumber;
};

const Products = () => {
  const { currentData, setCurrentPage, currentPage, handleNewCartItem } =
    useProducts();

  const [currentProductList, setCurrentProductList] = useState<DataEntity[]>();

  useEffect(() => {
    setCurrentProductList(currentData?.data!.filter((el) => !el.featured));
  }, [currentData]);

  const handlePageChange = (direction: string): void => {
    setCurrentPage({
      oldPage: currentPage.newPage,
      newPage:
        direction === "prev"
          ? parseNewPage(currentPage.newPage - 1)
          : parseNewPage(currentPage.newPage + 1),
    });
  };

  return (
    <>
      <ul className="flex flex-wrap justify-center gap-7  lg:ml-[240px] lg:justify-start">
        {currentProductList
          ? currentProductList.map((el, index) => (
              <li
                className={`${
                  index > 2 ? "hidden lg:block" : ""
                } group relative`}
                key={index}
              >
                <Image
                  width={362.39}
                  height={512.35}
                  src={el.image.src}
                  alt={el.image.alt}
                  className="h-[512.35px] cursor-pointer lg:h-[398.72px] lg:w-[282.02px]"
                  quality={100}
                  onClick={() => handleNewCartItem(el)}
                />
                <span className="absolute top-[467px] left-0 right-0 hidden h-[46px] items-center justify-center  bg-black text-[23px] font-medium text-white group-hover:flex lg:top-[353px]">
                  ADD TO CART
                </span>
                {el.bestseller ? (
                  <span className="absolute top-0 left-0 flex h-[37.49px] w-[163px] items-center justify-center bg-white  text-[20px] lg:h-[29.17px] lg:w-[127.4px]">
                    Best Seller
                  </span>
                ) : null}
                <h5 className="mt-[12px] text-[22px] font-bold text-[#656565]">
                  {`${el.category.slice(0, 1).toUpperCase()}${el.category.slice(
                    1
                  )}`}
                </h5>
                <h4 className="text-[34px] font-bold">
                  {el.name.split(" ")[0]}
                </h4>
                <p className="text-[29px]  text-[#656565]">${el.price}</p>
              </li>
            ))
          : null}
        <li className="  w-[100%] ">
          <Pagination handlePageChange={handlePageChange} />
        </li>
      </ul>
    </>
  );
};

export default Products;
