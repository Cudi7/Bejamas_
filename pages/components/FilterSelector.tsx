import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useProducts } from "../../src/contexts/products.context";

const people = [{ name: "Price" }, { name: "Name" }];

export default function FilterSelector() {
  const { setCurrentSortBy } = useProducts();
  const [selected, setSelected] = useState(people[0]);

  useEffect(() => {
    setCurrentSortBy({
      key: selected.name.toLowerCase(),
      type: "ASC",
    });
  }, [selected]);

  return (
    <div className=" w-[8rem]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative ">
          <Listbox.Button className="relative w-full cursor-default  pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="ml-4 block truncate text-[22px]">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 top-2 flex items-center pr-2">
              <img
                src="./arrowDown.svg"
                alt="sort icon"
                className=" h-[8px] w-[16px]"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      } text-[22px]`}
                    >
                      {person.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
