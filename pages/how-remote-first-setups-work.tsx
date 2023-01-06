import FullService from "../components/howItWorks/fullService";
import Hero from "../components/howItWorks/hero";
import Success from "../components/common/success";
import WorksForYou from "../components/howItWorks/worksForYou";

function HowRemoteFirstSetupsWork() {
  return (
    <>
      <Hero />
      <WorksForYou />
      <FullService />
      <Success
        title="allwhere makes setting your team up for success easy"
        subTilte="Ready to get started?"
        btnText="BOOK A DEMO"
        img="/success.webp"
      />
    </>
  );
}

export default HowRemoteFirstSetupsWork;
