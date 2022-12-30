import React from "react";
import Container from "../../ui/container";
import Title from "../../ui/text/title";
import DisturbuteCard from "./disturbuteCard";
import { disturbuteData } from "../../../constant";
function Disturbute() {
  return (
    <div className="bg-main-orange">
      <Container>
        <Title
          className="lg:!text-7xl text-4xl  mb-32 max-w-3xl leading-tight mx-auto  text-center"
          text="Why distributed teams choose allwhere"
        />
        <div className="space-y-28">
          {disturbuteData.map((data) => {
            return <DisturbuteCard key={data.id} data={data} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Disturbute;
