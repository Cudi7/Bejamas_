import Image from "next/image";
import React from "react";
import { Product } from "../../interfaces/product.interface";

interface FeaturedProps {
  featuredProduct: Product[] | undefined;
}

const Featured = ({ featuredProduct }: FeaturedProps) => {
  return (
    <section className="mb-[5.938rem] flex flex-wrap justify-between lg:mb-[7.5rem]">
      <div className="max-w-[43.125rem]">
        <h2 className="text-[1.375rem] font-bold">
          About the Samurai King Resting
        </h2>
        <span className="my-[20px] hidden text-[1.375rem] font-bold text-[#656565] lg:block">
          Pets
        </span>
        <p className="mt-[45px] mb-[39px] text-lg text-[#656565] lg:mt-0">
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.
        </p>
      </div>
      <div>
        <h2 className="mb-[50px] text-[1.375rem] font-bold">People also buy</h2>
        <ul className="flex gap-[20px] lg:gap-[35px]">
          {featuredProduct
            ? featuredProduct[0]?.people_also_buy.map((el, index) => (
                <li>
                  <Image
                    width={102}
                    height={131}
                    src={el.image.src}
                    alt={el.image.alt}
                    className="h-[131px] lg:h-[147px] lg:w-[117px]"
                  />
                  <h5 className="mt-[12px] text-[13px] font-bold text-[#656565]">
                    {`${el.category
                      .slice(0, 1)
                      .toUpperCase()}${el.category.slice(1)}`}
                  </h5>
                  <h4 className="text-base font-bold">
                    {el.name.split(" ")[0]}
                  </h4>
                  <p className="text-[15px]  text-[#656565]">${el.price}</p>
                </li>
              ))
            : null}
        </ul>
      </div>
    </section>
  );
};

export default Featured;
