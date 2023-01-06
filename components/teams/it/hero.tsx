import React from "react";
import HeroCta from "../../common/heroCta";
import Container from "../../ui/container";
function Hero() {
  return (
    <div className="bg-main-blue rounded-b-[50px]">
      <Container>
        <HeroCta
          containerClassName="!text-left"
          title="IT teams use allwhere for full lifecycle inventory management, from procurement to disposal."
          paragraph="With the rise of distributed workplaces, IT teams are facing new and unique challenges, all while aiming to provide the same high quality of service. allwhere delivers seamless and efficient solutions for your team to maximize ROI and reduce operational overhead."
          btnText="GET STARTED"
        />
      </Container>
    </div>
  );
}

export default Hero;
