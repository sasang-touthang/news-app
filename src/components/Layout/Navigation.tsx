import { NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import search from "./media/search.png";
import burger from "./media/burger.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const links = [
  { title: "India", href: "/" },
  { title: "USA", href: "/usa" },
  { title: "Business", href: "/business" },
  { title: "Technology", href: "/technology" },
  { title: "Entertainmet", href: "/entertainment" },
  { title: "Sports", href: "/sports" },
  { title: "Science", href: "/science" },
  { title: "Health", href: "/health" },
];

function Navigation(): JSX.Element {
  return (
    <div className="flex justify-between items-center px-5 xl:px-[8.31rem] py-5 xl:py-10">
      <NavLink to="/">
        <div className="flex gap-3 text-base font-bold items-center font_playfair">
          <span className="bg-black text-white p-2 rounded-md">News</span>
          <span>Portal</span>
        </div>
      </NavLink>

      <div className="flex items-center gap-5">
        <NavLink to="/search">
          <img className="cursor-pointer" src={search} />
        </NavLink>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`flex items-center transition ease-in-out focus:outline-none ${
                  open
                    ? "transform rotate-180 duration-500"
                    : "transform rotate-0 duration-500"
                }`}
              >
                {open ? (
                  <IoMdCloseCircleOutline size={30} />
                ) : (
                  <IoMdMenu size={30} />
                )}
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute w-[10rem] lg:w-[20rem] right-0  z-10 mt-3  sm:px-0 ">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {links.map(({ title, href }) => (
                        <NavLink
                          key={title}
                          to={href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                        >
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {title}
                            </p>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}

export default Navigation;
