import React from "react";
import Container from "../../ui/container";
import Title from "../../ui/text/title";
import DashboardCard from "./dashboardCard";
import { dashboardData } from "../../../constant";
function Dashboard() {
  return (
    <Container>
      <Title
        className="text-center mb-20 font-bold"
        text="Manage the full employee lifecycle from your personal dashboard"
      />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        {dashboardData.map((item, i) => {
          return <DashboardCard item={item} i={i} />;
        })}
      </div>
    </Container>
  );
}

export default Dashboard;
