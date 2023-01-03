import React from "react";
import DashboardCard from "../home/dashboard/dashboardCard";
import Container from "../ui/container";
import Title from "../ui/text/title";
import { worksForData } from "../../constant";

function WorksForYou() {
 
  return (
    <Container>
      <div className="max-w-3xl mb-20 text-center mx-auto">
        <Title
          text="The best way to work is what works for you"
          className="font-bold"
        />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        {worksForData.map((item, i) => {
          return <DashboardCard item={item} i={i} />;
        })}
      </div>
    </Container>
  );
}

export default WorksForYou;
