import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

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
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Filter
                    </Dialog.Title>
                    <img
                      src="./x.svg"
                      alt="close icon image"
                      className="h-[15px] w-[15px]"
                    />
                  </div>
                  <div className="mt-2">
                    <ul className="flex flex-col gap-4">
                      {categoriesItems.map((item) => (
                        <>
                          <li className="flex items-center gap-3 text-[28px] text-[#1D1D1D]">
                            <input
                              type="checkbox"
                              name={item}
                              id="items"
                              className="h-[23px] w-[23px]"
                            />
                            {item}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>

                  <div className="w-[100%] border border-slate-100"></div>
                  <div className="mt-4 flex justify-between gap-5">
                    <button
                      type="button"
                      className="inline-flex w-[100%] justify-center  border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-[100%] justify-center  border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
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
