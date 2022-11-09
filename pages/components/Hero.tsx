import Image from "next/image";
import React from "react";
import { useProducts } from "../../src/contexts/products.context";

const Hero = () => {
  const { featuredProduct, handleNewCartItem } = useProducts();

  return (
    <section className="relative mt-[2rem] mb-[2.188rem] flex  max-h-[627px] flex-col font-bold lg:mt-[3.625rem] lg:mb-[2.625rem]">
      <h1 className="text-3xl ">Samurai King Resting</h1>
      <div className="relative mt-[35px] mb-[31px]  lg:mt-[31px] lg:mb-[46px]">
        {featuredProduct ? (
          <Image
            src={featuredProduct[0]?.image.src}
            alt={featuredProduct[0]?.image.alt}
            height={553}
            width={1290}
            className="min-h-[239px]"
            quality={100}
            priority={true}
          />
        ) : null}
        <span
          className="absolute left-0 bottom-0 flex h-[56.54px] w-[227px] items-center justify-center border-b border-b-slate-300 bg-white text-[15px] lg:h-[67px]  lg:w-[271.95px] lg:text-xl
        "
        >
          Photo of the day
        </span>
      </div>
      <button
        onClick={() =>
          featuredProduct ? handleNewCartItem(featuredProduct[0]) : null
        }
        className="h-[3.8125rem] w-full bg-black text-white lg:absolute lg:right-0  lg:order-first lg:ml-auto lg:h-[2.9375rem] lg:w-[16.0625rem]"
      >
        ADD TO CART
      </button>
    </section>
  );
};

export default Hero;
