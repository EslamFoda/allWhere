import Distributed from "../../components/use-cases/retrieval/distributed";
import HowItWork from "../../components/use-cases/retrieval/howItWork";
import Starting from "../../components/use-cases/retrieval/starting";

function Retrieval() {
  return (
    <>
      <Starting />
      <Distributed />
      <HowItWork />
    </>
  );
}

export default Retrieval;
