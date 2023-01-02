import Image from "next/image";
import React from "react";
import Container from "../../ui/container";
import CardTitle from "../../ui/text/cardTitle";
import Paragraph from "../../ui/text/paragraph";
import Title from "../../ui/text/title";
import OnboardCards from "./common/onboardCards";
import { motion } from "framer-motion";

function Onboardings() {
  const onboardData = [
    {
      title: "Full remote setups",
      id: 1,
      subTitle:
        "Equip your new hires in the way that works best for them, with full work from home setup options including work accessories and furniture.",
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e416e7a8521_sticker%20%3D%20Earth.png",
    },
    {
      title: "Individualized onboarding",
      id: 2,
      subTitle:
        "We know that every team works differently. Use our platform to create templated kits ready to deploy at any time, or customize according to employees’ individual needs — all in a single welcome box.",
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9ec5cb7a8520_sticker%20%3D%20Paper.png",
    },
    {
      title: "End-to-end equipment tracking",
      id: 3,
      subTitle:
        "All logistics, shipping, and delivery will be handled on our side. Log in at any time to track status and updates, and receive automated alerts throughout the process.",
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e2a427a851f_sticker%20%3D%20Computer.png",
    },
    {
      title: "Custom swag",
      id: 4,
      subTitle:
        "Love swag, but can’t stand sorting and mailing it out? We’ll store and ship custom swag from hats, hoodies, water, bottles, and more.",
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e612d7a851e_sticker%20%3D%20Coffee.png",
    },
  ];
  return (
    <Container className="space-y-4">
      <Title
        text="Onboardings for a distributed world"
        className="font-bold   text-center"
      />
      <Paragraph
        text="In a hybrid or remote work environment, onboarding employees with the correct equipment can be difficult to coordinate for both the employer and the employee. We’ve nailed the correct way to make your new hires feel welcomed and ready for work."
        className="mx-auto text-center max-w-4xl"
      />
      <div className="grid lg:grid-cols-2 py-20 md:grid-cols-2 grid-cols-1 gap-10">
        {onboardData.map((data, i) => {
          return <OnboardCards key={data.id} data={data} i={i} />;
        })}
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#f9c54d] border-solid lg:p-16 items-center md:p-10 p-6 border-main-black border-2 rounded-xl gap-10">
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-8"
        >
          <Paragraph text="“allwhere has taken the onboarding time for a new hire from an hour to less than two minutes. From day 1, allwhere ensures that everyone on our team has the equipment they need to be successful.”" />
          <div>
            <CardTitle text="Byron Edwards" />
            <span>Co-Founder, Spark Advisors</span>
          </div>
        </motion.div>
        <div className="relative">
          <div className="w-full  shadow-main-black shadow-sm h-full flex-1 overflow-hidden rounded-lg border-2 border-solid border-main-black ">
            <Image
              sizes="(max-width: 479px) 89vw, (max-width: 767px) 94vw, (max-width: 991px) 87vw, 42vw"
              src="/women-laptop.webp"
              alt="women with laptop img"
              width="1024"
              height="594"
            />
          </div>
          <Image
            src="/draw-man.webp"
            className="absolute -bottom-32 left-0"
            alt="draw man img"
            width="172"
            height="200"
          />
        </div>
      </div>
    </Container>
  );
}

export default Onboardings;
