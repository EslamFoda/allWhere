import Dashboard from "../components/home/dashboard";
import Disturbute from "../components/home/disturbute";
import GetStarted from "../components/home/getStarted";
import GlobalCoverage from "../components/home/globalCoverage";
import Hero from "../components/home/hero";
import ItTeam from "../components/home/itTeam";
import Trusted from "../components/home/trusted";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Disturbute />
      <ItTeam />
      <Dashboard />
      <GlobalCoverage />
      <GetStarted />
    </>
  );
}
