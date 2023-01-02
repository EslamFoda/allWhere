import Onboardings from "../../components/use-cases/onboarding/onboardings";
import StreamLine from "../../components/use-cases/onboarding/streamLine";
import Supporting from "../../components/use-cases/onboarding/supporting";
import TeamsNeeds from "../../components/use-cases/onboarding/teamsNeeds";

function Onboarding() {
  return (
    <>
      <Supporting />
      <Onboardings />
      <TeamsNeeds />
      <StreamLine />
    </>
  );
}

export default Onboarding;
