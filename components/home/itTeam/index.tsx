import Image from "next/image";
import Container from "../../ui/container";
import Title from "../../ui/text/title";
import TeamCard from "./teamCard";
import { itTeamsData } from "../../../constant";

const ItTeam = () => {
  return (
    <Container>
      <div className="text-center space-y-8 mb-20">
        <Image
          alt="stars"
          className="inline"
          width={200}
          height={100}
          src="/stars.webp"
        />{" "}
        <Title
          className="font-bold"
          text="HR & IT teams are talking about allwhere"
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {itTeamsData.map((team) => {
          return <TeamCard key={team.id} team={team} />;
        })}
      </div>
    </Container>
  );
};

export default ItTeam;
