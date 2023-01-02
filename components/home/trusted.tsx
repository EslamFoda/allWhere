import React from "react";
import Container from "../ui/container";
import MarqueeImgs from "../common/marqueeImgs";
function Trusted() {
  return (
    <div>
      <Container className="!pt-20 pb-0">
        <div className="pb-6 border-b border-b-main-black/30 border-solid">
          <h3 className="text-2xl">allwhere is trusted by</h3>
        </div>
      </Container>
      <MarqueeImgs />
    </div>
  );
}

export default Trusted;
