import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import Marquee from "react-fast-marquee";
function Trusted() {
  const trustedImgs = [
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e2c357a866a_Cameo%20svg.svg",
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e96657a8663_found%201.svg",
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e957e7a86a4_logo_ateam.svg",
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e9ac37a866b_Verifiable.svg",
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e3e467a86a8_logo_spark-advisors.svg",
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e37017a8669_Patreon%20svg.svg",
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9ebd4c7a86a7_logo_skillshare.svg",
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9ef31a7a863c_glossgenius%201.svg",
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e3f2e7a86a6_logo_olaplex.svg",
    "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9ea9247a86a5_logo_namely.svg",
  ];
  return (
    <div>
      <Container>
        <div className="pb-6 border-b border-b-main-black border-solid">
          <h3 className="text-2xl">allwhere is trusted by</h3>
        </div>
      </Container>
      <Marquee pauseOnHover>
        <div className="flex  items-center py-4 first:mr-20 gap-20">
          {trustedImgs.map((img, i) => {
            return (
              <Image
                alt="trusted img"
                src={img}
                key={i}
                width={100}
                height={40}
              />
            );
          })}
        </div>
      </Marquee>
    </div>
  );
}

export default Trusted;
