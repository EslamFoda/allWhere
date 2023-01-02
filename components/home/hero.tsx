import React from "react";
import Image from "next/image";
import Container from "../ui/container";
import HeroCta from "../common/heroCta";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
        <HeroCta
          title="Everything you need to work from anywhere."
          paragraph="Save on time and cost by trusting allwhere with procurement,
          logistics, and deployment."
          btnText="BOOK A DEMO"
        />
        <div className=" lg:justify-self-end justify-self-center h-auto max-w-[590px] w-full">
          <Image
            sizes="(max-width: 479px) 89vw, (max-width: 767px) 94vw, (max-width: 991px) 87vw, 42vw"
            alt="hero img"
            src="/lg-hero-img.png"
            width="1024"
            height="594"
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
