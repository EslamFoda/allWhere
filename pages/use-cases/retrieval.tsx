import Distributed from "../../components/use-cases/retrieval/distributed";
import Frequently from "../../components/use-cases/retrieval/frequently";
import HowItWork from "../../components/use-cases/retrieval/howItWork";
import Starting from "../../components/use-cases/retrieval/starting";

function Retrieval() {
  return (
    <>
      <Starting />
      <Distributed />
      <HowItWork />
      <Frequently />
    </>
  );
}

export default Retrieval;
