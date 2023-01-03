import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { trustedImgs } from "../../constant";

function MarqueeImgs() {
  return (
    <Marquee gradientWidth={25} pauseOnHover>
      <div className="flex  items-center lg:py-10 md:py-10 py-5 first:mr-20 gap-x-20">
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
  );
}

export default MarqueeImgs;
