import Image from "next/image";
import React from "react";
import HeroCta from "../common/heroCta";

function Hero() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 p-8 lg:gap-24  gap-10">
      <HeroCta
        containerClassName="!text-left"
        title="We empower remote teams."
        paragraph="We connect you with the right equipment, products, services, and experiences for your company’s needs — for a seamless experience through the employee lifecycle."
        btnText="GET STARTED"
      />
      <div className="shadow-main-black shadow-sm justify-self-start self-start overflow-hidden rounded-lg border-2 border-solid border-main-black ">
        <Image
          src="/how-hero.webp"
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
