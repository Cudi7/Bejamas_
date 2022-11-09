import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { Fragment, useState } from "react";
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

export default function FilterSelectorMobile() {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleCategoriesMobile, currentCategory } = useProducts();
  const [currentCategories, setCurrentCategories] = useState<string[]>([]);

  const closeModal = (): void => setIsOpen(false);
  const openModal = (): void => {
    setCurrentCategories([]);
    handleCategoriesMobile([]);
    setIsOpen(true);
  };

  const handleInputCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: string
  ): void => {
    setCurrentCategories([...currentCategories, item.toLowerCase()]);
  };

  const handleCurrentCategories = () => {
    handleCategoriesMobile(currentCategories);
    closeModal();
    setCurrentCategories([]);
  };

  return (
    <>
      <div className="flex  lg:hidden" onClick={openModal}>
        <img src="./filterIcon.svg" alt="filter icon" />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-[34px] font-medium leading-6 text-gray-900 "
                    >
                      Filter
                    </Dialog.Title>
                    <img
                      src="./x.svg"
                      alt="close icon image"
                      className="h-[18px] w-[18px]"
                      onClick={closeModal}
                    />
                  </div>
                  <div className="mt-10">
                    <ul className="flex flex-col gap-4">
                      {categoriesItems.map((item, index) => (
                        <Fragment key={index}>
                          <li className="flex items-center gap-3 text-[28px] text-[#1D1D1D]">
                            <input
                              type="checkbox"
                              name={item}
                              id="items"
                              className="h-[23px] w-[23px]"
                              onChange={(e) => handleInputCheck(e, item)}
                            />
                            {item}
                          </li>
                          {index === categoriesItems.length - 1 ? (
                            <div className="mb-5 w-[70%] border bg-[#C2C2C2]"></div>
                          ) : null}
                        </Fragment>
                      ))}
                    </ul>
                  </div>

                  <div className="w-[100%] border border-slate-300"></div>
                  <div className="mt-4 flex justify-between gap-5 text-[23px]">
                    <button
                      type="button"
                      className="inline-flex w-[100%] justify-center  border-2 border-black bg-white px-4 py-2  font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-[100%] justify-center  border-2 border-transparent bg-black px-4 py-2  font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleCurrentCategories}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
