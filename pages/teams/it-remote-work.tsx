import Hero from "../../components/teams/it/hero";
import Cards from "../../components/teams/it/cards";
import FoundIt from "../../components/teams/it/foundIt";
import Success from "../../components/common/success";

function It() {
  return (
    <>
      <Hero />
      <Cards />
      <FoundIt />
      <Success title="Ready to win back hours and maximize ROI?" subTilte="Learn how allwhere can help you create a workplace that's connected, productive, and engaged." img="/it.webp" btnText="GET STARTED"/>
    </>
  );
}

export default It;
