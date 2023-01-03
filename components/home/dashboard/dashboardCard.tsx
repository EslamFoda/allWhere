import React from "react";
import { motion } from "framer-motion";
import CardTitle from "../../ui/text/cardTitle";
import CardSubTitle from "../../ui/text/cardSubTitle";

interface itemData {
  title: string;
  desc: string;
  img: string;
  id: number;
}

interface Props {
  item: itemData;
  i: number;
}

function DashboardCard({ item, i }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      key={item.id}
      viewport={{ once: true, amount: 0.1 }}
      className="border border-main-blue rounded-lg overflow-hidden border-solid"
    >
      <div
        className="bg-contain bg-center  bg-no-repeat"
        style={{
          backgroundImage: `url(${item.img})`,
          aspectRatio: 228 / 100,
        }}
      ></div>
      <div className="p-8 space-y-2">
        <CardTitle text={item.title} />
        <CardSubTitle text={item.desc} />
      </div>
    </motion.div>
  );
}

export default DashboardCard;
