import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import DropDown from "../../ui/dropdown";

function NavBar() {
  const { push } = useRouter();
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
    { title: "HR Teams", id: 1, url: "/use-cases/hr" },
    { title: "IT Teams", id: 2, url: "/use-cases/it" },
  ];

  const resources = [
    { title: "Seamless Offboarding", id: 1, url: "/use-cases/offboarding" },
    { title: "Remote Onboarding", id: 2, url: "/use-cases/onboarding" },
    { title: "Lifecycle Mangement", id: 3, url: "/use-cases/mangement" },
    { title: "Blogs and Guides", id: 4, url: "/use-cases/guides" },
  ];
  return (
    <nav className="flex items-center p-8 justify-between">
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
        <div className="flex mt-2 font-semibold items-center gap-6 text-sm">
          <span>how it works</span>
          <DropDown menu={useCases}>
            <span>use cases </span>
          </DropDown>
          <DropDown menu={teams}>
            <span>teams</span>
          </DropDown>
          <DropDown menu={resources}>
            <span>resources</span>
          </DropDown>
          <span>about</span>
        </div>
      </div>
      <button className="bg-[#f9c54d] transition-all drop-shadow-md w-full sm:w-auto md:w-auto lg:w-auto py-2 hover:bg-[#131414] hover:text-white px-4 rounded-full font-bold text-lg">
        BOOK A DEMO
      </button>
    </nav>
  );
}

export default NavBar;
