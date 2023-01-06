import React from "react";
import Container from "../../ui/container";
import CardSubTitle from "../../ui/text/cardSubTitle";
import CardTitle from "../../ui/text/cardTitle";
import { motion } from "framer-motion";
function Cards() {
  const lifeData = [
    {
      id: 1,
      title: "Send, retrieve, and store hardware with one click",
      subtitle:
        "Deploy, return, and store hardware without any added clutter to your office, home, or inbox — all at the touch of a button.",
    },
    {
      id: 2,
      title:
        "Customizable equipment and office setup options for your team’s unique needs",
      subtitle:
        "Our plans allow you and your employees to select various equipment options to your company-specific needs, empowering employees to choose what helps them work best",
    },
    {
      id: 3,
      title:
        "Zero touch deployment for full lifecycle management, maintenance, and upgrades",
      subtitle:
        "A seamless experience from deployment to decommission, with real-time support and overnight replacement and upgrade options.",
    },
    {
      id: 4,
      title: "Pre-vetted suppliers your team can trust",
      subtitle:
        "We carefully select and vet all partners to ensure high quality and reliability for you and your team.",
    },
  ];
  return (
    <Container>
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

export default Cards;
