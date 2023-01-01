import Image from "next/image";
import React from "react";
import Container from "../ui/container";
import Cta from "../common/cta";

function GetStarted() {
  return (
    <Container>
      <Image
        src="/get-started.png"
        alt="get started img"
        className="mb-20"
        width={1080}
        height={293}
      />
      <Cta
        title="Ready to get started?"
        paragraph="Learn how allwhere can help you give your team everything they need to excel."
      />
    </Container>
  );
}

export default GetStarted;
