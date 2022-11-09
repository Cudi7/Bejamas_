import React, { useState } from "react";
import { useProducts } from "../../src/contexts/products.context";

const categoriesItems: string[] = [
  "People",
  "Premium",
  "Pets",
  "Food",
  "Landmarks",
  "Cities",
  "Nature",
];

interface handleFiltersProps {
  handleFilters: (filter: string, isChecked: boolean) => void;
}

const Actions = () => {
  const { handleCategories } = useProducts();

  const handleInputCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: string
  ): void => {
    const isChecked = e.target.checked;
    handleCategories(item.toLowerCase(), isChecked);
  };

  return (
    <div className="hidden flex-col lg:flex">
      <h4 className="mb-[45px] text-[22px] font-bold">Category</h4>
      <ul className="flex flex-col gap-8">
        {categoriesItems.map((item) => (
          <>
            <li className="flex items-center gap-4 text-[22px] text-[#1D1D1D]">
              <input
                type="checkbox"
                name={item}
                id="items"
                className="h-[23px] w-[23px]"
                onChange={(e) => handleInputCheck(e, item)}
              />
              {item}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Actions;
