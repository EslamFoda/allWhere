import React from "react";
import Container from "../../ui/container";
import CardSubTitle from "../../ui/text/cardSubTitle";
import CardTitle from "../../ui/text/cardTitle";
import Title from "../../ui/text/title";
import { motion } from "framer-motion";
function Lifecycle() {
  const lifeData = [
    {
      id: 1,
      title: "Set your new hires up for success",
      subtitle:
        "Order pre-set or customizable equipment and kits for employees on all sides of your organization, ensuring a smooth transition to your team.",
    },
    {
      id: 2,
      title: "Boost employee engagement",
      subtitle:
        "Expand your employee offerings with personalized perks and wellness programs, from meditation to mental health and more.",
    },
    {
      id: 3,
      title: "Win back productivity",
      subtitle:
        "Combine all your vendors into one place with allwhere’s dashboard, equipped with one-click solutions to save you time in your day-to-day.",
    },
    {
      id: 4,
      title: "Ensure a cohesive employee experience",
      subtitle:
        "Quick and efficient onboarding and offboarding solutions, for whatever your team’s needs may be.",
    },
  ];
  return (
    <Container>
      <div className="max-w-5xl mb-20 mx-auto text-center">
        <Title
          className="font-bold "
          text="Manage the full employee lifecycle from your personal dashboard"
        />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  lg:gap-8 md:gap-8 gap-4">
        {lifeData.map((life, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="border space-y-2 lg:pr-16 md:pr-16 pr-6 border-solid border-main-blue lg:p-10 md:p-10 p-4 rounded-xl"
              key={life.id}
            >
              <CardTitle text={life.title} />
              <CardSubTitle text={life.subtitle} />
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}

export default Lifecycle;
