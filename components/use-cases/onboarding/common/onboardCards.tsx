import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CardTitle from "../../../ui/text/cardTitle";
import CardSubTitle from "../../../ui/text/cardSubTitle";

interface Props {
  i: number;
  data: { title: string; subTitle: string; img: string; id: number };
}

function OnboardCards({ data, i }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, delay: i * 0.2 }}
      viewport={{ once: true, amount: 0.1 }}
      key={data.id}
      className="flex text-center lg:text-left md:text-left  flex-col lg:flex-row gap-8 bg-main-orange p-6 rounded-xl items-center"
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
}

export default OnboardCards;
