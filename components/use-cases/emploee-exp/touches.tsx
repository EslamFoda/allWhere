import Image from "next/image";
import React from "react";
import HeaderWithSubtitle from "../../common/headerWithSubtitle";
import Container from "../../ui/container";
import CardSubTitle from "../../ui/text/cardSubTitle";
import CardTitle from "../../ui/text/cardTitle";

function Touches() {
  const touchesData = [
    {
      id: 1,
      title: "Individualized rewards",
      subTitle:
        "For company milestones, employee anniversaries, birthdays, or just to say “thank you,” send a one-off gift that’ll make your team feel special.",
      img: "/touchs1.webp",
    },
    {
      id: 2,
      title: "Modern wellness",
      subTitle:
        "From massages to meditation, let your employees choose their own rewards — and give them the wellness add-ons they’ve always wanted.",
      img: "/touchs2.webp",
    },
    {
      id: 3,
      title: "Curation support",
      subTitle:
        "Keeping up with workplace trends isn’t easy. If you’re stuck on what to offer your team that goes above and beyond, we’re happy to help.",
      img: "/touchs3.webp",
    },
    {
      id: 4,
      title: "Custom swag",
      subTitle:
        "Make your company sweatshirt the best one yet. We’ll deliver swag your employees will be excited to receive and wear.",
      img: "/touchs4.webp",
    },
  ];
  return (
    <Container>
      <div className="max-w-3xl mx-auto text-center">
        <HeaderWithSubtitle
          paragraphClass="max-w-xl text-center  mx-auto"
          title="Little touches that make a big difference"
          subTitle="We know employee experience goes beyond just hardware. We’ll help you go the extra mile."
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        {touchesData.map((data) => {
          return (
            <div className="text-center flex items-center justify-between flex-col gap-6  group " key={data.id}>
              <div className="group-even:rounded-full overflow-hidden group-odd:rounded-3xl ">
                <Image src={data.img} alt={data.title} width={1000} height={1000} className='aspect-square object-cover'/>
              </div>
              <h2 className="text-[28px] font-bold">{data.title}</h2>
              <CardSubTitle text={data.subTitle} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Touches;
