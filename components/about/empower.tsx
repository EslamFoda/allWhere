import React from "react";
import MarqueeImgs from "../common/marqueeImgs";
import Container from "../ui/container";

function Empower() {
  return (
    <div>
      <Container className='py-10'>
        <h1 className="lg:text-4xl md:text-3xl text-2xl max-w-xl mx-auto text-center font-bold">
          We're empowering teams to stay productive and connected
        </h1>
      </Container>
      <MarqueeImgs />
    </div>
  );
}

export default Empower;
