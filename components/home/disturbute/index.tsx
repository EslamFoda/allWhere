import Image from "next/image";
import React from "react";
import Container from "../../ui/container";

function Disturbute() {
  const disturbuteData = [
    {
      id: 1,
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/63a278469eb881535a837dc3_remote-onboarding-lifecycle-management-p-800.jpg",
      title: "Customized onboarding",
      subTitle:
        "We ensure your team has everything they need to excel — from equipment to wellness benefits.",
      btn: "Onboarding & Lifecycle Management",
    },
    {
      id: 2,
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/63a2786681600a1d688e35aa_employee-experience-benefits-p-800.jpg",
      title: "Curated employee experience",
      subTitle:
        "Make your workplace a great place to work with custom equipment, swag, wellness benefits, and more.",
      btn: "Employee Experience",
    },
    {
      id: 3,
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e35bf7a85b4_home__efficient-offboarding-p-800.jpg",
      title: "Efficient offboarding",
      subTitle:
        "We make it seamless to retrieve devices and assets, helping you save on time and cost.",
      btn: "Offboardings and Retrieval",
    },
  ];
  return (
    <div className="bg-main-orange">
      <Container>
        <h1 className="text-7xl mb-32 max-w-3xl leading-tight mx-auto  text-center">
          Why distributed teams choose allwhere
        </h1>
        <div className="space-y-28">
          {disturbuteData.map((data) => {
            return (
              <div className="flex lg:flex-row flex-col gap-10">
                <div className="space-y-6 flex-1">
                  <h2 className="text-6xl leading-tight  font-bold">
                    {data.title}
                  </h2>
                  <p className="text-2xl leading-loose">{data.subTitle}</p>
                  <button className="border text-xl font-semibold border-main-black border-solid rounded-full py-2 px-4 hover:bg-main-black hover:text-white transition-all">
                    {data.btn}
                  </button>
                </div>
                <div className="w-full h-full flex-1 overflow-hidden rounded-lg border-2 border-solid border-main-black ">
                  <Image
                    sizes="(max-width: 479px) 89vw, (max-width: 767px) 94vw, (max-width: 991px) 87vw, 42vw"
                    src={data.img}
                    alt={data.title}
                    width="1024"
                    height="594"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Disturbute;
