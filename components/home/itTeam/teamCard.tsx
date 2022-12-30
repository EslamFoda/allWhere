import Image from "next/image";
import React from "react";

interface TeamProps {
  id: number;
  companyLogo: string;
  desc: string;
  position: string;
  personName: string;
}
interface Props {
  team: TeamProps;
}

function TeamCard({ team }: Props) {
  return (
    <div
      className="border border-main-black rounded-xl p-8 flex flex-col gap-8 justify-between"
      key={team.id}
    >
      <Image
        alt={"team logo"}
        src={team.companyLogo}
        width={120}
        height={100}
      />
      <p className="leading-loose text-lg">{team.desc}</p>
      <div>
        <h3 className="font-bold">{team.personName}</h3>
        <span className="text-xs">{team.position}</span>
      </div>
    </div>
  );
}

export default TeamCard;
