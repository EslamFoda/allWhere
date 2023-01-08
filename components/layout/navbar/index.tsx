import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DropDown from "../../ui/dropdown";
import Drawer from "../../ui/topDrawer";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { push, route } = useRouter();
  const isRouteInTeamPage = route.includes("teams") || route.includes("guides");
  const useCases = [
    {
      title: "Onboarding & Lifecycle Management",
      id: 1,
      url: "/use-cases/onboarding",
    },
    {
      title: "Employee Experience",
      id: 2,
      url: "/use-cases/employee-experience",
    },
    { title: "Offboardings and Retrieval", id: 3, url: "/use-cases/retrieval" },
  ];
  const teams = [
    { title: "HR Teams", id: 1, url: "/teams/hr-remote-work" },
    { title: "IT Teams", id: 2, url: "/teams/it-remote-work" },
  ];

  const resources = [
    {
      title: "Seamless Offboarding",
      id: 1,
      url: "/guides/seamless-offboarding",
    },
    {
      title: "Remote Onboarding",
      id: 2,
      url: "/guides/remote-employee-onboarding",
    },
    {
      title: "Lifecycle Mangement",
      id: 3,
      url: "/guides/lifecycle-management",
    },
  ];
  return (
    <nav
      className={`${
        isRouteInTeamPage ? "bg-main-blue" : ""
      } flex items-center p-8 justify-between`}
    >
      <Drawer push={push} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex gap-2 flex-col text-sm font-semibold">
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              push("/how-remote-first-setups-work");
            }}
          >
            how it works
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              push("/about");
            }}
          >
            about
          </span>
        </div>
        <div className="pt-4">
          <span className="text-gray-500 pb-1 text-xs border-b block w-full">
            use cases
          </span>
          <div className="flex flex-col gap-2 text-sm font-semibold pt-4">
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                push("/use-cases/onboarding");
              }}
            >
              Onboarding & Lifecycle Management
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                push("/use-cases/onboarding");
              }}
            >
              Employee Experience
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                push("/use-cases/onboarding");
              }}
            >
              Offboarding & Retrievals
            </span>
          </div>
        </div>
        <div className="pt-4">
          <span className="text-gray-500 pb-1 text-xs border-b block w-full">
            teams
          </span>
          <div className="flex flex-col gap-2 text-sm font-semibold pt-4">
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                push("/teams/hr-remote-work");
              }}
            >
              HR Teams
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                push("/teams/it-remote-work");
              }}
            >
              IT Teams
            </span>
          </div>
        </div>
        <div className="pt-4">
          <span className="text-gray-500 pb-1 text-xs border-b block w-full">
            resources
          </span>
          <div className="flex flex-col gap-2 text-sm font-semibold pt-4">
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                push("/guides/seamless-offboarding");
              }}
            >
              Seamless Offboarding
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                push("/guides/remote-employee-onboarding");
              }}
            >
              Remote Onboarding
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                push("/guides/lifecycle-management");
              }}
            >
              Lifecycle Management
            </span>
          </div>
          <button className="border text-xs w-full mt-6 font-semibold border-main-black border-solid rounded-full py-2 px-4 hover:bg-main-black hover:text-white transition-all">
          BOOK A DEMO
        </button>
        </div>
      </Drawer>
      <div className="flex items-center gap-16">
        <Image
          onClick={() => {
            push("/");
          }}
          className="cursor-pointer"
          alt="nav icon"
          src="https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9efcf27a851d_Logo.svg"
          width={142}
          height={27}
        />
        <div className="lg:flex hidden mt-2 font-semibold items-center gap-6 text-sm">
          <span
            className="cursor-pointer"
            onClick={() => {
              push("/how-remote-first-setups-work");
            }}
          >
            how it works
          </span>
          <DropDown menu={useCases}>
            <span>use cases </span>
          </DropDown>
          <DropDown menu={teams}>
            <span>teams</span>
          </DropDown>
          <DropDown menu={resources}>
            <span>resources</span>
          </DropDown>
          <span
            className="cursor-pointer"
            onClick={() => {
              push("/about");
            }}
          >
            about
          </span>
        </div>
      </div>
      <button className="bg-[#f9c54d] lg:block hidden transition-all drop-shadow-md w-full sm:w-auto md:w-auto lg:w-auto py-2 hover:bg-[#131414] hover:text-white px-4 rounded-full font-bold text-lg">
        BOOK A DEMO
      </button>
      <div className="lg:hidden  block">
        {isOpen ? null : (
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className="space-y-1 cursor-pointer"
          >
            <div className="bg-[#f9c54d] transition-all h-2 w-10 border-main-black border-2"></div>
            <div className="bg-[#f9c54d] transition-all h-2 w-10 border-main-black border-2"></div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
