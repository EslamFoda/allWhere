import Image from "next/image";
import React from "react";
import HeroCta from "../common/heroCta";

function Hero() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 p-8 lg:gap-24  gap-10">
      <HeroCta 
      containerClassName="!text-left"
        title="creating a best-in-class workplace in a work-from-anywhere world."
        paragraph="We’re on a mission to revolutionize the future of work and reimagine how distributed teams come together. Our product allows workplaces to move into the future of work, so their teams can reach their full potential."
        btnText="VIEW OPEN POSITIONS"
      />
      <div className="shadow-main-black shadow-sm justify-self-start self-start overflow-hidden rounded-lg border-2 border-solid border-main-black ">
        <Image
          src="/about-hero.webp"
          alt="hero img"
          width="1024"
          height="1024"
          className="aspect-square object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
