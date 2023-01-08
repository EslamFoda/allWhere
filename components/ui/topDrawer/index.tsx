import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  push: any;
};

export default function Drawer({
  children,
  isOpen,
  setIsOpen,
  push,
}: DrawerProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        className="fixed z-30 inset-0 overflow-y-auto"
      >
        <div className="flex w-full">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="z-40 fixed inset-0 bg-black" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div
              className={`flex flex-col justify-between bg-white z-50
             w-full  py-4  text-left
             align-middle shadow-xl `}
            >
              <div>
                <div className="self-center px-6 pb-4  transition-all ">
                  <span className="flex justify-between  items-center gap-2">
                    <Image
                      onClick={() => {
                        push("/");
                        setIsOpen(false);
                      }}
                      className="cursor-pointer"
                      alt="nav icon"
                      src="https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9efcf27a851d_Logo.svg"
                      width={142}
                      height={27}
                    />
                    <div
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      <div className="bg-[#f9c54d] h-2 w-10 rotate-45 translate-y-2 transition-all border-main-black border-2"></div>
                      <div className="bg-[#f9c54d] h-2 w-10 -rotate-45 transition-all border-main-black border-2"></div>
                    </div>
                  </span>
                </div>
                <div className="px-6">{children}</div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
