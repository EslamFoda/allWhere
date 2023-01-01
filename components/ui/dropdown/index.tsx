import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

interface Props {
  children: any;
  menu: { title: string; id: number; url: string }[];
}

const DropDown = ({ children, menu }: Props) => {
  const { pathname } = useRouter();
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="flex group items-center gap-1">
                {children}{" "}
                <div className="mt-1">
                  <div className="w-2 h-[2px] bg-main-black"></div>
                  <div
                    className={`w-2 ${
                      open ? "rotate-0" : "rotate-90"
                    } transition-all -translate-y-[2px]  absloute right-0 top-0 h-[2px] bg-main-black`}
                  ></div>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 translate-y-3"
              enterTo="transform opacity-100 translate-y-0"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 translate-y-0"
              leaveTo="transform opacity-0 translate-y-3"
            >
              <Menu.Items className="absolute  z-10 left-0 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md  border-2 border-solid border-main-black bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1  py-1 ">
                  {menu.map((item) => {
                    return (
                      <Menu.Item key={item.id}>
                        {({ active }) => (
                          <Link
                            href={item.url}
                            className={`${
                              active || pathname === item.url
                                ? " text-main-black"
                                : "text-gray-600"
                            } group flex w-full items-center rounded-md px-2 py-2 text-xs font-medium`}
                          >
                            {item.title}
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};
export default DropDown;
