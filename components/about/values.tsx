import React from "react";
import Container from "../ui/container";
import CardSubTitle from "../ui/text/cardSubTitle";
import CardTitle from "../ui/text/cardTitle";
import { motion } from "framer-motion";
function Values() {
  const valuesData = [
    {
      title: "Inclusion",
      subTitle:
        "We are a small but mighty team that believes in treating all employees equally and fairly. We don’t tolerate discrimination, ever, and we’re committed to a culture that emphasizes diversity and equality.",
      id: 1,
    },
    {
      title: "Flexibility",
      subTitle:
        "Our business is built around equipping employees with the tools they need to do their best work. That goes for our team, too; we’re distributed remotely, with the option always available to work from our Brooklyn offices if you so choose.",
      id: 2,
    },
    {
      title: "Growth",
      subTitle:
        "At allwhere, you’ll be provided with the tools you need to grow both personally and professionally. You’ll have the opportunity to collaborate with teams across our business and develop in the areas that interest you most.",
      id: 3,
    },
  ];
  return (
    <Container className="space-y-8">
      <h1 className="font-bold text-3xl">Our values</h1>
      <div className="grid grid-cols-3 gap-8">
        {valuesData.map((value, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              key={value.id}
              viewport={{ once: true, amount: 0.2 }}
              className="border-main-black space-y-6 border-solid border rounded-lg p-10"
            >
              <CardTitle text={value.title} />
              <CardSubTitle text={value.subTitle} />
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}

export default Values;
