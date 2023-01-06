import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import CardSubTitle from "../text/cardSubTitle";
import CardTitle from "../text/cardTitle";
interface Props {
  btn: string;
  panelText: string;
}
function Expand({ btn, panelText }: Props) {
  return (
    <div className="mb-10">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex border-b pb-2 border-main-black/20 gap-5 items-center w-full justify-between text-left ">
              <CardTitle className="text-lg" text={btn} />
              <div
                className={`${
                  open
                    ? "bg-[#373a67] border-2 text-white border-[#373a67]"
                    : "border-2 text-[#373a67] border-[#373a67]"
                } w-max p-1 rounded-full`}
              >
                {open ? (
                  <MinusIcon className="h-6 w-6" />
                ) : (
                  <PlusIcon className="h-6 w-6" />
                )}
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform -translate-y-4 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform -translate-y-4 opacity-0"
            >
              <Disclosure.Panel>
                <CardSubTitle className="py-4" text={panelText} />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Expand;
