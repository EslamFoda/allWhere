import Container from "../../ui/container";
import Paragraph from "../../ui/text/paragraph";
import Title from "../../ui/text/title";
import TeamsTabs from "./common/teamsTabs";
const TeamsNeeds = () => {
  return (
    <Container>
      <div className="space-y-4">
        <Title
          text="Full lifecycle management adaptable to your team’s needs"
          className="font-bold  max-w-4xl mx-auto text-center"
        />
        <Paragraph
          text="From procurement to deployment, and upgrades to retrievals, our solutions equip your team to do their best work, no matter how distributed."
          className="mx-auto text-center max-w-4xl"
        />
      </div>
      <TeamsTabs />
    </Container>
  );
};
export default TeamsNeeds;
