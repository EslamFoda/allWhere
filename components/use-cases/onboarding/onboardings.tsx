import Image from "next/image";
import React from "react";
import Container from "../../ui/container";
import CardSubTitle from "../../ui/text/cardSubTitle";
import CardTitle from "../../ui/text/cardTitle";
import Paragraph from "../../ui/text/paragraph";
import Title from "../../ui/text/title";
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
        className="font-bold text-center"
      />
      <Paragraph
        text="In a hybrid or remote work environment, onboarding employees with the correct equipment can be difficult to coordinate for both the employer and the employee. We’ve nailed the correct way to make your new hires feel welcomed and ready for work."
        className="mx-auto text-center max-w-4xl"
      />
      <div className="grid lg:grid-cols-2 pt-20 md:grid-cols-2 grid-cols-1 gap-10">
        {onboardData.map((data, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              key={data.id}
              className="flex text-center lg:text-left md:text-left  flex-col lg:flex-row gap-8 bg-main-orange p-4 rounded-xl items-center"
            >
              <Image
                src={data.img}
                alt={data.title + "img"}
                width={94}
                height={94}
                className="md:self-start self-center lg:self-center"
              />
              <div className="space-y-2">
                <CardTitle text={data.title} />
                <CardSubTitle text={data.subTitle} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}

export default Onboardings;
